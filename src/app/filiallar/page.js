"use client";
import branches from '..//..//..//public/data/branches.json';

import { useState } from 'react';

import styles from './Filiallar.module.scss';
import { FaSearch, FaChevronRight } from 'react-icons/fa';

export default function FiliallarPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = branches.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className={styles.filiallarPage}>
      <header className={styles.header}>
        <div className={styles.container}>
          <span className={styles.topTag}>Şəbəkəmiz</span>
          <h1 className={styles.title}>Harada olursanız, <br/> <span>yanınızdayıq.</span></h1>
          
          <div className={styles.searchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Filial və ya şəhər axtar..." 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <section className={styles.listSection}>
        <div className={styles.container}>
          {filtered.map((branch, index) => (
            <div key={branch.id} className={styles.branchRow} style={{"--delay": index}}>
              <div className={styles.mainInfo}>
                <span className={styles.city}>{branch.city}</span>
                <h3 className={styles.name}>{branch.name} Filialı</h3>
              </div>
              <div className={styles.addressInfo}>
                <p>{branch.address || "Bakı şəhəri, Mərkəzi küçə"}</p>
              </div>
              <div className={styles.action}>
                <button className={styles.mapBtn}>
                  Xəritədə gör <FaChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}