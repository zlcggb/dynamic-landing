import React from 'react';
import { NavBar } from './Slide2';

const testItems = [
  {
    icon: '🛬',
    title: '静态目标降落',
    desc: '不同光照、地面材质下的精准降落验证',
    highlight: '多光照/多地面材质'
  },
  {
    icon: '🚗',
    title: '动态目标降落',
    desc: '不同速度（最高20km/h）、不同运动轨迹平台的移动目标降落',
    highlight: '20km/h动态平台'
  },
  {
    icon: '🌬️',
    title: '复杂环境测试',
    desc: '模拟5级风扰、小雨、薄雾等极端天气下的系统表现',
    highlight: '风雨雾极端环境'
  },
  {
    icon: '📡',
    title: '传感器干扰测试',
    desc: '模拟GPS信号弱/丢失、视觉部分遮挡等干扰场景',
    highlight: '信号丢失/遮挡'
  },
  {
    icon: '✈️',
    title: '初步应用验证',
    desc: '与物流企业合作，在机场巡检场景进行自动回收测试',
    highlight: '真实场景应用'
  }
];

const Slide9: React.FC = () => (
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
        4.1 实战检验：多样化场景下的严苛测试
        <span style={{ fontSize: 18, fontWeight: 500, color: '#0ea5e9', marginLeft: 16 }}>
         
        </span>
      </h1>
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#0ea5e9', margin: '18px 0 10px 0' }}>
        
      </h2>
      <div style={{ fontSize: 15, color: '#334155', marginBottom: 18, fontWeight: 500 }}>
        <span style={{ background: '#e0e7ef', color: '#1e3a8a', borderRadius: 5, padding: '1px 8px', fontWeight: 700 }}>
          测试方法
        </span>：采用仿真(SIL/HIL)、实验室(动捕系统标定)、户外实地相结合的系统化测试流程
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', marginBottom: 8 }}>
        {testItems.map(item => (
          <div key={item.title} style={{
            background: 'linear-gradient(120deg,#f0fdfa 80%,#f1f5fa 100%)',
            borderRadius: 22,
            boxShadow: '0 2px 10px rgba(14,165,233,0.07)',
            border: '1.5px solid #e0e7ef',
            padding: '18px 22px 16px 22px',
            minWidth: 220,
            maxWidth: 270,
            flex: '1 1 220px',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontSize: 22, marginRight: 7 }}>{item.icon}</span>
              <span style={{ fontWeight: 800, color: '#1e3a8a', fontSize: 16 }}>{item.title}</span>
            </div>
            <div style={{ fontSize: 15, color: '#334155', fontWeight: 600, marginBottom: 2 }}>{item.desc}</div>
            <div style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, background: '#e0f2fe', borderRadius: 4, padding: '1px 7px', alignSelf: 'flex-start' }}>{item.highlight}</div>
          </div>
        ))}
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
        结论：充分且严苛的实验验证了系统在真实世界复杂场景下的可行性、稳定性和高性能
      </div>
    </div>
  </div>
);

export default Slide9;
