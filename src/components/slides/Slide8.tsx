import React from 'react';
import { NavBar } from './Slide2';

const Slide8: React.FC = () => (
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
        3.2 创新二：智能环境感知
      </h1>
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#0ea5e9', margin: '18px 0 10px 0' }}>
        感知升级：五重融合构筑全息视野
      </h2>
      <div style={{ fontSize: 16, color: '#334155', marginBottom: 20, fontWeight: 500 }}>
        创新点: 首次将激光雷达、双目视觉、RTK、IMU与磁力辅助进行系统性、深度耦合应用于动态降落场景，构建了独特的全方位、全天候、高精度感知体系
      </div>
      <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 18 }}>
        {/* 优势互补卡片 */}
        <div style={{
          background: 'linear-gradient(120deg,#e0f2fe 80%,#f1f5fa 100%)',
          borderRadius: 22,
          boxShadow: '0 2px 10px rgba(14,165,233,0.07)',
          border: '1.5px solid #bae6fd',
          padding: '18px 22px 16px 22px',
          minWidth: 220,
          maxWidth: 270,
          flex: '1 1 220px',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: 7,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            <span style={{ fontSize: 22, color: '#0ea5e9', marginRight: 7 }}>🔗</span>
            <span style={{ fontWeight: 800, color: '#0ea5e9', fontSize: 17 }}>优势互补</span>
          </div>
          <div style={{ fontSize: 15, color: '#334155', fontWeight: 600, marginBottom: 2 }}>
            <span style={{ background: '#bae6fd', color: '#0284c7', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>LiDAR</span> 全局结构感知<br/>
            <span style={{ background: '#f0abfc', color: '#a21caf', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Camera</span> 目标精准识别(Apriltag/YOLOv8)<br/>
            <span style={{ background: '#fde68a', color: '#b45309', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>RTK</span> 全局基准<br/>
            <span style={{ background: '#bbf7d0', color: '#15803d', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>IMU</span> 高频姿态<br/>
            <span style={{ background: '#fca5a5', color: '#b91c1c', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>磁力</span> 末端超精信息
          </div>
        </div>
        {/* 信息冗余卡片 */}
        <div style={{
          background: 'linear-gradient(120deg,#f0fdfa 80%,#f1f5fa 100%)',
          borderRadius: 22,
          boxShadow: '0 2px 10px rgba(14,165,233,0.07)',
          border: '1.5px solid #99f6e4',
          padding: '18px 22px 16px 22px',
          minWidth: 220,
          maxWidth: 270,
          flex: '1 1 220px',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: 7,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            <span style={{ fontSize: 22, color: '#0ea5e9', marginRight: 7 }}>🛡️</span>
            <span style={{ fontWeight: 800, color: '#0ea5e9', fontSize: 17 }}>信息冗余</span>
          </div>
          <div style={{ fontSize: 15, color: '#334155', fontWeight: 600, marginBottom: 2 }}>
            <span style={{ color: '#0ea5e9', fontWeight: 700 }}>多传感器协同</span>，任一失效，<span style={{ background: '#fca5a5', color: '#b91c1c', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>系统仍稳定</span><br/>
            <span style={{ color: '#64748b' }}>鲁棒性大幅提升</span>
          </div>
        </div>
        {/* 全栈优化卡片 */}
        <div style={{
          background: 'linear-gradient(120deg,#f0fdf4 80%,#f1f5fa 100%)',
          borderRadius: 22,
          boxShadow: '0 2px 10px rgba(34,197,94,0.07)',
          border: '1.5px solid #bbf7d0',
          padding: '18px 22px 16px 22px',
          minWidth: 220,
          maxWidth: 270,
          flex: '1 1 220px',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: 7,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            <span style={{ fontSize: 22, color: '#22c55e', marginRight: 7 }}>⚡</span>
            <span style={{ fontWeight: 800, color: '#22c55e', fontSize: 17 }}>全栈优化</span>
          </div>
          <div style={{ fontSize: 15, color: '#334155', fontWeight: 600, marginBottom: 2 }}>
            <span style={{ background: '#bbf7d0', color: '#15803d', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Jetson Orin Nano</span> 高效并行<br/>
            <span style={{ color: '#0ea5e9', fontWeight: 700 }}>五传感器</span> 毫秒级融合<br/>
            <span style={{ color: '#64748b' }}>兼顾性能与嵌入式</span>
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
        效果：实现了在复杂环境（5级风、雨雾、弱GPS）下的高可靠运行（98.3%成功率）和厘米级定位
      </div>
    </div>
  </div>
);

export default Slide8;
