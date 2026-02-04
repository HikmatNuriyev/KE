// import React from 'react';

// const AzMap = () => (
//   <g
//     transform="translate(0,1024) scale(1,-1)"
//     fill="#f2f2f2"
//   >
//     <path d="M6638 9205 c-36 -13..." />
//     <path d="M429 3842 c-42 -32..." />
//   </g>
// );

// export default AzMap;


import React from 'react';

const AzMap = () => (
  <g
    transform="translate(0,1024) scale(1,-1)"
    fill="var(--map-bg, #f2f2f2)" // CSS Variable-a bağladıq
    stroke="var(--map-border, #ddd)" // Sərhədlər üçün
    strokeWidth="2"
  >
    {/* Bura sənin o uzun path-lərin gəlir */}
    <path d="M6638 9205 c-36 -13..." />
    <path d="M429 3842 c-42 -32..." />
  </g>
);

export default AzMap;