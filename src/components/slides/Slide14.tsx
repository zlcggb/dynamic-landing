import React from 'react';
import { NavBar } from './Slide2';

const resourceItems = [
  {
    icon: '🔬',
    title: '优先保障核心技术',
    desc: '经费优先用于采购高性能传感器、计算平台和关键动力部件，确保技术先进性。',
    color: '#38bdf8'
  },
  {
    icon: '🏫',
    title: '利用现有资源',
    desc: '充分利用学校实验室设备、计算资源、开源软件(ROS)降低成本。',
    color: '#6366f1'
  },
  {
    icon: '🛠️',
    title: '合理外包/采购服务',
    desc: '对于非核心自研或需专业设备/技能的部分（如精密加工、特定测试），采用外购服务提高效率和质量。',
    color: '#fbbf24'
  },
  {
    icon: '🤝',
    title: '人力资源优化',
    desc: '跨学科团队成员互补，分工协作，最大化内部人力资源效能。',
    color: '#22c55e'
  }
];

const Slide14: React.FC = () => (
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
    <NavBar current={5} />
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
        6.2 资源优化：保障核心技术研发与验证
        <span style={{ fontSize: 18, fontWeight: 500, color: '#0ea5e9', marginLeft: 16 }}>
          资源配置方案 & 合理性分析
        </span>
      </h1>
      <div style={{ fontSize: 15, color: '#334155', margin: '16px 0 18px 0', fontWeight: 500 }}>
        资源配置策略：
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', marginBottom: 16 }}>
        {resourceItems.map(item => (
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
        配置合理性：资源配置方案有效支撑了项目核心技术的研发、系统集成和充分的实验验证，保障了项目目标的达成
      </div>
    </div>
  </div>
);

export default Slide14;
