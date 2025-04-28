import React from 'react';

const Slide17: React.FC = () => (
  <div style={{
    background: 'linear-gradient(120deg, #f8fafc 70%, #eef2f6 100%)',
    width: 960,
    minHeight: 600,
    position: 'relative',
    borderRadius: 32,
    margin: 'auto',
    boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 48,
  }}>
    {/* 四角无人机SVG装饰 */}
    {[{top:20,left:20},{top:20,right:20},{bottom:20,left:20},{bottom:20,right:20}].map((pos,i) => (
      <svg key={i} style={{ position: 'absolute', width: 48, height: 48, opacity: 0.2, ...pos }} viewBox="0 0 100 100">
        <rect x="45" y="45" width="10" height="10" fill="#0ea5e9"/>
        <line x1="50" y1="50" x2="20" y2="20" stroke="#0ea5e9" strokeWidth="5"/>
        <line x1="50" y1="50" x2="80" y2="20" stroke="#0ea5e9" strokeWidth="5"/>
        <line x1="50" y1="50" x2="20" y2="80" stroke="#0ea5e9" strokeWidth="5"/>
        <line x1="50" y1="50" x2="80" y2="80" stroke="#0ea5e9" strokeWidth="5"/>
        <circle cx="20" cy="20" r="10" fill="#0ea5e9"/>
        <circle cx="80" cy="20" r="10" fill="#0ea5e9"/>
        <circle cx="20" cy="80" r="10" fill="#0ea5e9"/>
        <circle cx="80" cy="80" r="10" fill="#0ea5e9"/>
      </svg>
    ))}
    <div style={{
      width: '100%',
      textAlign: 'center',
      marginBottom: 16,
    }}>
      <h1 style={{ fontSize: 40, color: '#1e3a8a', fontWeight: 900, letterSpacing: 2, margin: 0 }}>
        诚挚致谢
        <span style={{ fontSize: 22, fontWeight: 500, color: '#0ea5e9', marginLeft: 18 }}>
          Acknowledgements
        </span>
      </h1>
    </div>
    <div style={{
      width: '100%',
      textAlign: 'center',
      marginTop: 24,
    }}>
      <h1 style={{ fontSize: 38, color: '#0ea5e9', fontWeight: 800, letterSpacing: 2, margin: 0 }}>
        交流与探讨
        <span style={{ fontSize: 22, fontWeight: 500, color: '#64748b', marginLeft: 18 }}>
          Q&A
        </span>
      </h1>
    </div>
  </div>
);

export default Slide17;
