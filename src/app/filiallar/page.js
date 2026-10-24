
"use client";
import { useEffect, useRef, useState } from "react";
// import branches from "../../../public/data/branches.json";
import styles from "./Filiallar.module.scss";
import { FaSearch, FaMapMarkerAlt, FaBuilding, FaChevronRight } from "react-icons/fa";

// const mapsQuery = (branch) =>
//   encodeURIComponent(`Kredit Evi ${branch.name} ${branch.city}`);
const googleMapsUrl = (branch) =>
  `https://www.google.com/maps/search/?api=1&query=${branch.lat},${branch.lng}`;
const wazeUrl = (branch) =>
  `https://www.waze.com/ul?ll=${branch.lat},${branch.lng}&navigate=yes`;


function loadStyle(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      const check = () => (window.L ? resolve() : setTimeout(check, 50));
      return check();
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

const AZ_CENTER = [40.25, 47.8];

export default function FiliallarPage() {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedId, setHighlightedId] = useState(null);
  const highlightTimer = useRef(null);

  const mapElRef = useRef(null);
  const mapInstanceRef = useRef(null);


  // const filtered = branches
  //   .filter(
  //     (b) =>
  //       b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       b.city.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  //   .sort((a, b) => a.name.localeCompare(b.name, "az"));
  const query = searchTerm.toLocaleLowerCase("az");
  const filtered = branches
    .filter(
      (b) =>
        b.name.toLocaleLowerCase("az").includes(query) ||
        b.address.toLocaleLowerCase("az").includes(query)
    )
    .sort((a, b) => a.name.localeCompare(b.name, "az"));

  useEffect(() => {
    let cancelled = false;

    fetch("/api/branches")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (!cancelled) setBranches(Array.isArray(data) ? data : []);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!branches.length) return;
    let cancelled = false;

    async function initMap() {
      loadStyle("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
      // loadStyle(
      //   "https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css"
      // );
      // loadStyle(
      //   "https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css"
      // );

      await loadScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js");
      // await loadScript(
      //   "https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"
      // );

      if (cancelled || !mapElRef.current || mapInstanceRef.current) return;

      const L = window.L;
      const map = L.map(mapElRef.current, {
        zoomControl: true,
        scrollWheelZoom: true,
      }).setView(AZ_CENTER, 7);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // const clusterGroup = L.markerClusterGroup({
      //   maxClusterRadius: 50,
      //   iconCreateFunction: (cluster) =>
      //     L.divIcon({
      //       html: `<div class="${styles.clusterBubble}">${cluster.getChildCount()}</div>`,
      //       className: "",
      //       iconSize: L.point(38, 38),
      //     }),
      // });
      const clusterGroup = L.featureGroup();

      const pinIcon = L.divIcon({
        className: "",
        html: `<span class="${styles.pinWrap}"><span class="${styles.pinPulse}"></span><span class="${styles.pinDot}"></span></span>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
        popupAnchor: [0, -16],
      });

      const markerById = {};

      branches.forEach((branch) => {
        const marker = L.marker([branch.lat, branch.lng], { icon: pinIcon });
        marker.bindPopup(
          `<div class="${styles.popupCard}">
             <strong>${branch.name} filialı</strong>
             <span>${branch.address}</span>
             <div class="${styles.popupLinks}">
               <a href="${googleMapsUrl(branch)}" target="_blank" rel="noopener noreferrer">Google Maps</a>
               <a href="${wazeUrl(branch)}" target="_blank" rel="noopener noreferrer">Waze</a>
             </div>
           </div>`
        );
        clusterGroup.addLayer(marker);
        markerById[branch.id] = marker;
      });

      map.addLayer(clusterGroup);
      mapInstanceRef.current = { map, clusterGroup, markerById };
    }

    initMap();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.map.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [branches]);


  const focusBranch = (branch) => {
    setSearchTerm("");
    setHighlightedId(branch.id);

    const inst = mapInstanceRef.current;
    if (inst) {
      const marker = inst.markerById[branch.id];
      inst.map.flyTo([branch.lat, branch.lng], 12, { duration: 0.8 });
      // if (marker) {
      //   inst.clusterGroup.zoomToShowLayer(marker, () => marker.openPopup());
      // }
      if (marker) {
        inst.map.once("moveend", () => marker.openPopup());
      }
    }

    if (highlightTimer.current) window.clearTimeout(highlightTimer.current);
    highlightTimer.current = window.setTimeout(
      () => setHighlightedId(null),
      1800
    );
  };

  return (
    <div className={styles.filiallarPage}>
      <div className={styles.splitLayout}>
       
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            {/* <span className={styles.topTag}>Şəbəkəmiz</span> */}
            {/* <h1 className={styles.title}>
              Harada olursanız, <span>yanınızdayıq.</span>
            </h1> */}
            {/* <p className={styles.subtitle}>
              Azərbaycan üzrə {branches.length} filialımızdan sizə ən yaxın
              olanı tapın.
            </p> */}

            <div className={styles.searchWrapper}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Filial və ya ünvan axtar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.sidebarList}>
            {loading ? (
              <div className={styles.emptyState}>
                <FaMapMarkerAlt />
                <p>Filiallar yüklənir...</p>
              </div>
            ) : filtered.length > 0 ? (
              filtered.map((branch) => (
                <button
                  key={branch.id}
                  type="button"
                  className={`${styles.branchRow} ${
                    highlightedId === branch.id ? styles.highlighted : ""
                  }`}
                  onClick={() => focusBranch(branch)}
                >
                  <span className={styles.rowIcon}>
                    <FaBuilding />
                  </span>
                  <span className={styles.rowText}>
                    <strong>{branch.name} filialı</strong>
                    {/* <small>
                      {branch.city}
                      {!branch.exact && " "}
                    </small> */}
                    <small>{branch.address}</small>
                  </span>
                  <FaChevronRight className={styles.rowChevron} />
                </button>
              ))
            ) : (
              <div className={styles.emptyState}>
                <FaMapMarkerAlt />
                <p>
                  {searchTerm
                    ? `"${searchTerm}" üzrə nəticə tapılmadı.`
                    : "Filial məlumatı hazırda əlçatan deyil."}
                </p>
              </div>
            )}
          </div>
        </aside>

       
        <div className={styles.mapPane} ref={mapElRef} />
      </div>
    </div>
  );
}