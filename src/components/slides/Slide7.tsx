import React from 'react';
import { NavBar } from './Slide2';

const Slide7: React.FC = () => (
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
    <NavBar current={2} />
    <div style={{
      width: '90%',
      maxWidth: 820,
      background: '#fff',
      borderRadius: 24,
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      padding: 32,
      marginTop: 20,
      marginBottom: 20,
    }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1e3a8a', margin: 0 }}>
      3.1控制革新：从容应对动态与干扰
      </h1>
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#0ea5e9', margin: '18px 0 10px 0' }}>
        
      </h2>
      <div style={{ fontSize: 16, color: '#334155', marginBottom: 20, fontWeight: 500 }}>
        创新点: 将自适应PID、视觉位姿估计和磁力辅助进行创新性结合，形成多层级、自适应的复合控制策略
      </div>
      <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 18 }}>
        <div style={{
          background: 'linear-gradient(135deg,#f1f5fa 60%,#e0e7ef 100%)',
          borderRadius: 20,
          boxShadow: '0 2px 8px rgba(30,64,175,0.04)',
          border: '1.5px solid #e0e7ef',
          padding: '18px 22px',
          minWidth: 220,
          maxWidth: 270,
          flex: '1 1 220px',
          textAlign: 'left',
        }}>
          <div style={{ fontWeight: 700, color: '#1e40af', fontSize: 17, marginBottom: 6 }}>自适应PID</div>
          <div style={{ fontSize: 15, color: '#475569' }}>
            在线调整控制参数，适应不同飞行状态和外部扰动（如强风），保证基础稳定性
          </div>
        </div>
        <div style={{
          background: 'linear-gradient(135deg,#f1f5fa 60%,#e0e7ef 100%)',
          borderRadius: 20,
          boxShadow: '0 2px 8px rgba(30,64,175,0.04)',
          border: '1.5px solid #e0e7ef',
          padding: '18px 22px',
          minWidth: 220,
          maxWidth: 300,
          flex: '1 1 220px',
          textAlign: 'left',
        }}>
          <div style={{ fontWeight: 700, color: '#0ea5e9', fontSize: 17, marginBottom: 6 }}>视觉位姿估计 (EPnP优化)</div>
          <div style={{ fontSize: 15, color: '#475569' }}>
            提供基于目标特征的精确相对位姿引导，适用于中近距离跟踪
          </div>
        </div>
        <div style={{
          background: 'linear-gradient(135deg,#f1f5fa 60%,#e0e7ef 100%)',
          borderRadius: 20,
          boxShadow: '0 2px 8px rgba(34,197,94,0.08)',
          border: '1.5px solid #bbf7d0',
          padding: '18px 22px',
          minWidth: 220,
          maxWidth: 270,
          flex: '1 1 220px',
          textAlign: 'left',
        }}>
          <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 17, marginBottom: 6 }}>磁力辅助 (核心突破)</div>
          <div style={{ fontSize: 15, color: '#475569' }}>
            在降落末端（&lt;0.5m），视觉易受限时，提供厘米级甚至毫米级的精确引导力/位置反馈。<br/>
            有效补偿视觉位姿的累积误差或低更新率问题<br/>
            可提供一定的物理吸附力，增强抗风扰动和接触稳定性
          </div>
        </div>
      </div>
      <div style={{
        background: 'linear-gradient(90deg,#f1f5fa 60%,#e0e7ef 100%)',
        borderRadius: 20,
        boxShadow: '0 2px 8px rgba(30,64,175,0.04)',
        border: '1.5px solid #e0e7ef',
        padding: '18px 22px',
        width: 640,
        margin: '0 auto',
        marginBottom: 18,
        fontWeight: 600,
        color: '#1e40af',
        fontSize: 16,
        textAlign: 'center',
      }}>
        效果：实现了在高达20km/h移动目标上的±5cm精准降落，
        显著提升了动态性能和末端精度
      </div>
    </div>
  </div>
);

export default Slide7;
