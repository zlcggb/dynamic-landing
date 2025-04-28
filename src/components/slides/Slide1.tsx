import React from 'react';

const Slide1: React.FC = () => (
  <div style={{
    background: 'linear-gradient(120deg, #f8fafc 70%, #f3f6fa 100%)',
    width: 960,
    minHeight: 600,
    position: 'relative',
    borderRadius: 32,
    margin: 'auto',
    boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div style={{
      width: '90%',
      maxWidth: 820,
      margin: '0 auto',
      background: 'rgba(255,255,255,0.98)',
      borderRadius: 24,
      boxShadow: '0 8px 24px 0 rgba(60,60,60,0.06)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{
        fontWeight: 700,
        fontSize: 38,
        letterSpacing: 2,
        marginBottom: 16,
        background: 'linear-gradient(90deg, #1e3a8a 0%, #0ea5e9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textAlign: 'center',
        fontFamily: 'inherit',
      }}>
        智能空中机动：无人机的动态降落与多传感器融合技术
      </div>
      <div style={{
        fontSize: 22,
        color: '#2563eb',
        marginBottom: 18,
        textAlign: 'center',
        fontWeight: 500,
        letterSpacing: 1,
      }}>
        技术路径、商业价值与未来布局
      </div>
      <div style={{
        fontSize: 17,
        color: '#64748b',
        marginBottom: 6,
        textAlign: 'center',
        fontWeight: 400,
      }}>
        团队成员：郑婧怡、范靖轩、陈文怡、伍锦豪、鲁宗涛、唐颖琦
      </div>
      <div style={{
        fontSize: 17,
        color: '#64748b',
        marginBottom: 14,
        textAlign: 'center',
        fontWeight: 400,
      }}>
        指导教师：程涛（技术路径指导）、黄雪（商业运营指导）
      </div>
      <img
        src="https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="slide1"
        style={{
          width: 340,
          height: 160,
          borderRadius: 12,
          objectFit: 'cover',
          boxShadow: '0 8px 24px 0 rgba(60,60,60,0.10)',
          marginTop: 10,
        }}
      />
    </div>
  </div>
);

export default Slide1;
