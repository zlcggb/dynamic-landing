import React from 'react';
import { NavBar } from './Slide2';

const sensors = [
  {
    title: 'LiDAR (远距3D)',
    desc: '全局结构感知，不受光照影响的SLAM/里程计',
    color: '#a78bfa',
  },
  {
    title: '深度相机 (近距纹理/深度)',
    desc: '目标识别(Apriltag/YOLOv8)，精细建模，视觉伺服',
    color: '#38bdf8',
  },
  {
    title: 'RTK-GPS/IMU (位姿基准)',
    desc: '提供全局坐标系下的高精度定位(RTK)和高频姿态(IMU)。',
    color: '#fbbf24',
  },
  {
    title: '磁力辅助 (末端引导)',
    desc: '提供厘米级相对定位/引导力，解决末端精度难题',
    color: '#34d399',
  },
];

const Slide6: React.FC = () => (
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
    <NavBar current={1} />
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
        2.2 多传感器融合方法 (Fusion Method)
      </h1>
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#0ea5e9', margin: '18px 0 10px 0' }}>
        全息感知基础：五位一体的多传感器融合策略
      </h2>
      <div style={{ fontSize: 16, color: '#334155', marginBottom: 20, fontWeight: 500 }}>
        融合方法核心: 克服单一传感器局限，利用信息冗余和优势互补构建鲁棒、精确的感知定位系统
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, auto)',
        gap: 22,
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: '0 auto 24px auto',
        maxWidth: 520,
      }}>
        {sensors.map(sensor => (
          <div key={sensor.title} style={{
            background: 'rgba(248,249,250,0.96)',
            borderRadius: 18,
            boxShadow: `0 4px 16px 0 ${sensor.color}22`,
            border: `1.5px solid ${sensor.color}33`,
            padding: '18px 22px',
            minWidth: 180,
            maxWidth: 240,
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            textAlign: 'left',
          }}>
            <div style={{ fontWeight: 500, fontSize: 16, color: sensor.color }}>{sensor.title}</div>
            <div style={{ fontSize: 14, color: '#475569' }}>{sensor.desc}</div>
          </div>
        ))}
      </div>
      <div style={{
        background: 'linear-gradient(90deg, #a78bfa33 0%, #38bdf833 25%, #fbbf2433 60%, #34d39933 100%)',
        borderRadius: 18,
        boxShadow: '0 2px 12px rgba(30,64,175,0.04)',
        padding: '18px 24px',
        margin: '0 0 20px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{ fontWeight: 800, fontSize: 17, color: '#1e40af', marginBottom: 4 }}>
          EKF 融合引擎 & 自适应权重
        </div>
        <div style={{ fontSize: 14, color: '#475569', textAlign: 'center', marginBottom: 4 }}>
          时空标定: 在线EKF标定传感器内外参数和时间延迟，保证数据对齐<br />
          状态估计: 采用紧耦合EKF，概率最优融合所有传感器信息，输出统一高精度位姿<br />
          自适应权重: 根据GPS信号质量、视觉特征点等动态调整权重，提升鲁棒性
        </div>
        <div style={{ fontSize: 13, color: '#64748b' }}>
          通过深度融合五种异构传感器，构建全天候、全场景、高精度的感知定位基础
        </div>
      </div>
      {/* Visual Diagram 占位 */}
      <div style={{
        width: 640,
        height: 80,
        background: 'linear-gradient(90deg,#f1f5fa 60%,#e0e7ef 100%)',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 16px rgba(30,64,175,0.05)',
        padding: '0 24px',
        fontSize: 15,
        color: '#1e40af',
        fontWeight: 600,
        margin: '0 auto',
      }}>
        <span>LiDAR</span>
        <span>→深度相机</span>
        <span>→RTK-GPS/IMU</span>
        <span>→磁力辅助</span>
        <span style={{ fontWeight: 800, color: '#0ea5e9' }}>→ EKF融合引擎</span>
        <span style={{ fontWeight: 700, color: '#22c55e' }}>→ 高精度状态</span>
      </div>
      
    </div>
  </div>
);

export default Slide6;
