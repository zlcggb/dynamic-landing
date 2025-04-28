import React from 'react';
import { NavBar } from './Slide2';

const productItems = [
  {
    icon: '📦',
    title: '硬件产品化',
    desc: '小型化、轻量化、降低成本，面向产业落地',
    color: '#38bdf8'
  },
  {
    icon: '🧩',
    title: '软件与接口',
    desc: '软件封装、API标准化，提升易用性与兼容性',
    color: '#6366f1'
  },
  {
    icon: '🛡️',
    title: '系统可靠性',
    desc: '增强系统可靠性与环境适应性，满足工业级应用需求',
    color: '#fbbf24'
  }
];

const industryItems = [
  {
    icon: '🚚',
    title: '近期应用',
    desc: '智慧物流末端配送、应急物资精准投送、自动化巡检充电场景，输出核心技术模组或解决方案',
    color: '#22c55e'
  },
  {
    icon: '🌆',
    title: '远期拓展',
    desc: '城市空中交通(UAM) eVTOL起降、海事动态平台回收、精准农业等新兴领域',
    color: '#f472b6'
  }
];

const Slide15: React.FC = () => (
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
    <NavBar current={6} />
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
        7.1 迈向市场：产品化路径与行业应用前景
        <span style={{ fontSize: 18, fontWeight: 500, color: '#0ea5e9', marginLeft: 16 }}>
          产品化与行业应用
        </span>
      </h1>
      <div style={{ fontSize: 15, color: '#334155', margin: '16px 0 18px 0', fontWeight: 500 }}>
        应用STP与SWOT(Opportunities)逻辑：基于市场定位和机遇，规划未来应用
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', marginBottom: 16 }}>
        {productItems.map(item => (
          <div key={item.title} style={{
            background: `linear-gradient(120deg,${item.color}20 80%,#f1f5fa 100%)`,
            borderRadius: 22,
            boxShadow: `0 2px 10px ${item.color}22`,
            border: `1.5px solid ${item.color}`,
            padding: '18px 22px 16px 22px',
            minWidth: 230,
            maxWidth: 270,
            flexBasis: 240,
            height: 150,
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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', marginBottom: 16 }}>
        {industryItems.map(item => (
          <div key={item.title} style={{
            background: `linear-gradient(120deg,${item.color}20 80%,#f1f5fa 100%)`,
            borderRadius: 22,
            boxShadow: `0 2px 10px ${item.color}22`,
            border: `1.5px solid ${item.color}`,
            padding: '18px 22px 16px 22px',
            minWidth: 230,
            maxWidth: 270,
            flexBasis: 240,
            height: 150,
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
        市场机遇：抓住低空经济发展契机，与无人机制造商、系统集成商、行业头部客户建立合作，共同推广应用<br/>
        <span style={{ color: '#64748b', fontWeight: 500, fontSize: 14 }}>
          （指导老师：清晰的产品化和市场拓展路径是商业成功的关键）
        </span>
      </div>
    </div>
  </div>
);

export default Slide15;
