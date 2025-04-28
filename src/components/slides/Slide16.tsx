import React from 'react';
import { NavBar } from './Slide2';

const valueItems = [
  {
    icon: '🚀',
    title: '提升效率',
    desc: '大幅提高物流配送、应急响应、巡检作业的自动化水平和效率。',
    color: '#38bdf8'
  },
  {
    icon: '💸',
    title: '降低成本',
    desc: '减少人力依赖、降低运营失误成本、提高设备利用率。',
    color: '#22c55e'
  },
  {
    icon: '📈',
    title: '开拓市场',
    desc: '赋能无人机在更复杂场景下的应用，创造新的市场增长点。',
    color: '#fbbf24'
  }
];

const socialItems = [
  {
    icon: '🛡️',
    title: '公共安全',
    desc: '提升应急救援能力，保障生命财产安全。',
    color: '#6366f1'
  },
  {
    icon: '🏙️',
    title: '便民服务',
    desc: '改善物流体验，推动城市智能化发展。',
    color: '#f472b6'
  },
  {
    icon: '🔬',
    title: '科技进步',
    desc: '推动无人机自主控制、多传感器融合等领域的技术发展。',
    color: '#a3a3a3'
  }
];

const Slide16: React.FC = () => (
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
    <NavBar current={7} />
    <div style={{
      width: '95%',
      maxWidth: 950,
      background: '#fff',
      borderRadius: 24,
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      padding: 32,
      marginTop: 20,
      marginBottom: 20,
    }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1e3a8a', margin: 0 }}>
        7.2 赋能未来：项目的社会与经济价值
        <span style={{ fontSize: 18, fontWeight: 500, color: '#0ea5e9', marginLeft: 16 }}>
          Value Proposition & BCG
        </span>
      </h1>
      <div style={{ fontSize: 15, color: '#334155', margin: '16px 0 18px 0', fontWeight: 500 }}>
        应用Value Proposition与BCG逻辑：总结项目创造的价值和战略意义
      </div>
      <div style={{ fontWeight: 700, color: '#1e3a8a', fontSize: 18, margin: '8px 0 8px 0' }}>经济效益</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', marginBottom: 8 }}>
        {valueItems.map(item => (
          <div key={item.title} style={{
            background: `linear-gradient(120deg,${item.color}20 80%,#f1f5fa 100%)`,
            borderRadius: 22,
            boxShadow: `0 2px 10px ${item.color}22`,
            border: `1.5px solid ${item.color}`,
            padding: '18px 22px 16px 22px',
            minWidth: 230,
            maxWidth: 270,
            flexBasis: 240,
            height: 120,
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 6,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontSize: 22, marginRight: 7 }}>{item.icon}</span>
              <span style={{ fontWeight: 900, color: item.color, fontSize: 16 }}>{item.title}</span>
            </div>
            <div style={{ fontSize: 13, color: '#334155', fontWeight: 500 }}>{item.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ fontWeight: 700, color: '#1e3a8a', fontSize: 18, margin: '18px 0 8px 0' }}>社会效益</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', marginBottom: 8 }}>
        {socialItems.map(item => (
          <div key={item.title} style={{
            background: `linear-gradient(120deg,${item.color}20 80%,#f1f5fa 100%)`,
            borderRadius: 22,
            boxShadow: `0 2px 10px ${item.color}22`,
            border: `1.5px solid ${item.color}`,
            padding: '18px 22px 16px 22px',
            minWidth: 230,
            maxWidth: 270,
            flexBasis: 240,
            height: 120,
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 6,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontSize: 22, marginRight: 7 }}>{item.icon}</span>
              <span style={{ fontWeight: 900, color: item.color, fontSize: 16 }}>{item.title}</span>
            </div>
            <div style={{ fontSize: 13, color: '#334155', fontWeight: 500 }}>{item.desc}</div>
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
        战略意义（BCG Recap）：项目处于高增长市场的问题产品阶段，具备发展为明星产品的巨大潜力，对推动相关产业智能化升级具有重要价值
      </div>
    </div>
  </div>
);

export default Slide16;
