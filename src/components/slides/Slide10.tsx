import React from 'react';
import { NavBar } from './Slide2';

const kpiItems = [
  {
    icon: '🎯',
    title: '动态降落精度',
    value: '±5cm @ 20km/h',
    desc: '显著优于行业数十cm'
  },
  {
    icon: '📍',
    title: '静态降落精度',
    value: '±2cm',
    desc: '达到高精度标准'
  },
  {
    icon: '🌦️',
    title: '复杂环境成功率',
    value: '98.3%',
    desc: '5级风/雨雾下，远超传统方案'
  },
  {
    icon: '⚡',
    title: '系统延迟',
    value: '降低60%',
    desc: '毫秒级响应，保障动态控制'
  },
  {
    icon: '🛣️',
    title: '路径规划效率',
    value: '提升55%',
    desc: '满足实时重规划需求'
  }
];

const Slide10: React.FC = () => (
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
    justifyContent: 'flex-start',
  }}>
    <NavBar current={3} />
    <div style={{
      width: '95%',
      maxWidth: 900,
      background: '#fff',
      borderRadius: 24,
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      padding: 32,
      marginTop: 20,
      marginBottom: 20,
    }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1e3a8a', margin: 0 }}>
        4.2 量化卓越：核心性能指标与行业对比
        <span style={{ fontSize: 18, fontWeight: 500, color: '#0ea5e9', marginLeft: 16 }}>
          KPI Analysis & Benchmarking
        </span>
      </h1>
      <div style={{ fontSize: 15, color: '#334155', margin: '16px 0 18px 0', fontWeight: 500 }}>
        应用KPI与Benchmarking逻辑：展示关键量化结果，并与行业基准对比，凸显优势
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', marginBottom: 12 }}>
        {kpiItems.map(item => (
          <div key={item.title} style={{
            background: 'linear-gradient(120deg,#f0fdfa 80%,#f1f5fa 100%)',
            borderRadius: 22,
            boxShadow: '0 2px 10px rgba(14,165,233,0.07)',
            border: '1.5px solid #e0e7ef',
            padding: '18px 22px 16px 22px',
            minWidth: 220,
            maxWidth: 220,
            flexBasis: 220,
            height: 160,
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 6,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontSize: 22, marginRight: 7 }}>{item.icon}</span>
              <span style={{ fontWeight: 800, color: '#1e3a8a', fontSize: 16 }}>{item.title}</span>
            </div>
            <div style={{ fontSize: 22, color: '#0ea5e9', fontWeight: 700, marginBottom: 2 }}>{item.value}</div>
            <div style={{ fontSize: 13, color: '#64748b', fontWeight: 600 }}>{item.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 22, justifyContent: 'center', marginBottom: 14 }}>
        <div style={{
          background: 'linear-gradient(120deg,#fef9c3 80%,#f1f5fa 100%)',
          borderRadius: 20,
          boxShadow: '0 2px 10px rgba(251,191,36,0.08)',
          border: '1.5px solid #fde68a',
          padding: '18px 22px',
          minWidth: 220,
          maxWidth: 270,
          flex: '1 1 220px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
        }}>
          <div style={{ fontSize: 22, marginBottom: 4 }}>🏆</div>
          <div style={{ fontWeight: 800, color: '#eab308', fontSize: 16 }}>奖项</div>
          <div style={{ fontSize: 14, color: '#b45309', fontWeight: 600, marginBottom: 2 }}>国赛二等奖</div>
          {/* 可插入证书图片 */}
        </div>
        <div style={{
          background: 'linear-gradient(120deg,#bae6fd 80%,#f1f5fa 100%)',
          borderRadius: 20,
          boxShadow: '0 2px 10px rgba(14,165,233,0.09)',
          border: '1.5px solid #bae6fd',
          padding: '18px 22px',
          minWidth: 220,
          maxWidth: 270,
          flex: '1 1 220px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
        }}>
          <div style={{ fontSize: 22, marginBottom: 4 }}>💻</div>
          <div style={{ fontWeight: 800, color: '#0ea5e9', fontSize: 16 }}>开源贡献</div>
          <div style={{ fontSize: 14, color: '#334155', fontWeight: 600, marginBottom: 2 }}>优化EPnP代码库</div>
        </div>
      </div>
      <div style={{
        background: 'linear-gradient(90deg,#f1f5fa 60%,#e0e7ef 100%)',
        borderRadius: 20,
        boxShadow: '0 2px 8px rgba(30,64,175,0.04)',
        border: '1.5px solid #e0e7ef',
        padding: '18px 22px',
        width: 680,
        margin: '0 auto',
        marginBottom: 18,
        fontWeight: 600,
        color: '#1e40af',
        fontSize: 16,
        textAlign: 'center',
      }}>
        结论：各项核心性能指标均达到预期，并获得权威认可，技术领先性得到验证
      </div>
    </div>
  </div>
);

export default Slide10;
