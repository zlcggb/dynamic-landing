import React from 'react';
import { NavBar } from './Slide2';

const algoSteps = [
  {
    title: '实时状态估计',
    detail: '通过多传感器融合获取无人机高精度位姿。'
  },
  {
    title: '动态目标跟踪',
    detail: '利用YOLOv8等识别移动目标，结合卡尔曼滤波预测其运动轨迹。'
  },
  {
    title: '智能路径规划',
    detail: '采用改进A*与B样条结合，实时生成动力学约束、避障和目标运动的安全平滑轨迹 (效率提升55%)。'
  },
  {
    title: '自适应精准控制',
    detail: '基础层: 双闭环PID实现姿态和位置稳定。\n引导层: 视觉位姿估计(EPnP)根据目标特征进行中近距离精确引导。\n精调层(创新): 磁力辅助在末端（厘米级）提供强引导/反馈，补偿视觉误差，实现超高精度对准。'
  }
];

const Slide5: React.FC = () => (
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
        2.1 智能决策核心：动态降落的算法逻辑
      </h1>
      <h2 style={{ fontSize: 20, fontWeight: 600, color: '#0ea5e9', margin: '18px 0 10px 0' }}>
        
      </h2>
      <div style={{ fontSize: 16, color: '#334155', marginBottom: 22, fontWeight: 500 }}>
        {/* 技术路径关键: 实现从环境感知到精准控制的智能闭环 */}
      </div>
      {/* 闭环流程视觉化（图片风格） */}
      <div style={{ position: 'relative', width: 700, margin: '36px auto 0 auto', height: 260 }}>
        {/* 流程节点 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', position: 'absolute', top: 0, left: 0 }}>
          {algoSteps.map((step, i) => (
            <div key={step.title} style={{ width: 110, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: 64,
                height: 64,
                background: 'linear-gradient(135deg,#e0e7ef 60%,#f1f5fa 100%)',
                borderRadius: '50%',
                boxShadow: '0 4px 16px rgba(30,64,175,0.07)',
                border: '2.5px solid #0ea5e9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#1e40af',
                fontSize: 15,
                marginBottom: 8,
                textAlign: 'center',
                zIndex: 2,
              }}>{step.title}</div>
            </div>
          ))}
        </div>
        {/* 箭头SVG层 */}
        <svg width="700" height="60" style={{ position: 'absolute', top: -24, left: 0, pointerEvents: 'none', zIndex: 1 }}>
          {/* 横向箭头 */}
          {[0,1,2].map(i => (
            <g key={i}>
              <line x1={i*200+64} y1={56} x2={(i+1)*200} y2={56} stroke="#0ea5e9" strokeWidth="2" />
              <polygon points={`${(i+1)*200-8},52 ${(i+1)*200},56 ${(i+1)*200-8},60`} fill="#0ea5e9" />
            </g>
          ))}
          {/* 闭环箭头（直线拐角: 右上→上→左上，蓝色，线宽2.5） */}
          <polyline points="644,20 644,2 55,2 55,20" stroke="#0ea5e9" strokeWidth="2.5" fill="none" />
          {/* 起点箭头（右上，蓝色） */}
          <polygon points="640,10 644,0 648,10" fill="#0ea5e9" />
          {/* 终点箭头（左上，蓝色） */}
          <polygon points="55,20 51,10 59,10" fill="#0ea5e9" />
        </svg>
        {/* 说明卡片层 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', position: 'absolute', top: 120, left: 0 }}>
          {algoSteps.map((step, i) => (
            <div key={step.title} style={{
              width: 170,
              minHeight: 60,
              background: 'rgba(248,249,250,0.97)',
              borderRadius: 18,
              boxShadow: '0 2px 8px rgba(30,64,175,0.04)',
              border: '1.5px solid #e0e7ef',
              padding: '10px 14px',
              fontSize: 14,
              color: '#475569',
              fontWeight: 500,
              textAlign: 'left',
              marginTop: 0,
              marginBottom: 0,
              whiteSpace: 'pre-line',
              zIndex: 2,
            }}>
              <span style={{ fontWeight: 700, color: '#1e40af', fontSize: 15 }}>{step.title}</span>
              <div style={{ marginTop: 4 }}>{step.detail}</div>
            </div>
          ))}
        </div>
      </div>
      {/* 闭环描述区 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 8,
        marginTop: 150,
      }}>
        
      </div>
      <div style={{
        margin: '18px 0 0 0',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* 简化流程图视觉占位 */}
        <div style={{
          width: 430,
          height: 80,
          background: 'linear-gradient(90deg,#e0e7ef 60%,#f1f5fa 100%)',
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 4px 16px rgba(30,64,175,0.06)',
          padding: '0 24px',
          fontSize: 15,
          color: '#1e40af',
          fontWeight: 600,
        }}>
          <span>感知 → 融合 → 预测 → 规划 → 控制 → 执行 → 感知反馈</span>
        </div>
        
      </div>
    </div>
  </div>
);

export default Slide5;
