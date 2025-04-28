import React from 'react';
import { NavBar } from './Slide2';

const Slide3: React.FC = () => (
  <div
    style={{
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
      justifyContent: 'flex-start',
    }}
  >
    <NavBar current={0} />
    <div
      style={{
        width: 820,
        margin: '0 auto',
        background: 'rgba(255,255,255,0.98)',
        borderRadius: 24,
        boxShadow: '0 8px 24px 0 rgba(60,60,60,0.06)',
        padding: '32px 32px 28px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 18,
        position: 'relative',
        top: 0,
      }}
    >
      <div
        style={{
          fontWeight: 800,
          fontSize: 30,
          letterSpacing: 1.2,
          marginBottom: 14,
          background: 'linear-gradient(90deg, #1e3a8a 0%, #0ea5e9 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        1.1 行业趋势与市场机遇
        <span style={{ fontSize: 16, color: '#2563eb', marginLeft: 12, fontWeight: 500 }}>
          — PESTLE 分析
        </span>
      </div>
      <div style={{ fontSize: 19, color: '#222', fontWeight: 500, marginBottom: 8 }}>
        低空经济浪潮：政策、市场与技术的交汇点
      </div>

      {/* 环形分布PESTLE卡片布局 */}
      <div style={{ position: 'relative', width: 800, height: 400, margin: '0 auto' }}>
        {[
          { key: 'P', title: '政策法规', content: '空域管理放开，安全标准制定' },
          { key: 'E', title: '经济牵引', content: '千亿市场，年增长20%，降本增效需求' },
          { key: 'S', title: '社会需求', content: '城市化加速，人群对配送与应急期待' },
          { key: 'T', title: '技术赋能', content: 'AI、传感器、5G等小型化成熟' },
          { key: 'L', title: '法律完善', content: '顶层设计优化，规范与标准落地' },
          { key: 'E2', title: '环境影响', content: '生态隐私关注，绿色低碳诉求' },
        ].map((f, i, arr) => {
          const angle = (i / arr.length) * Math.PI * 2;
          const cx = 400;
          const cy = 200;
          const r = 150;
          const x = cx + Math.cos(angle) * r - 60;
          const y = cy + Math.sin(angle) * r - 40;
          return (
            <div
              key={f.key}
              style={{
                position: 'absolute',
                left: x,
                top: y,
                width: 120,
                height: 120,
                background: 'rgba(255,255,255,0.9)',
                borderRadius: 16,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '4px',
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 600, color: '#1e40af' }}>{f.key}</div>
              <div style={{ fontSize: 14, color: '#334155' }}>{f.title}</div>
              <div style={{ fontSize: 12, color: '#334155', marginTop: 4 }}>{f.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Slide3;
