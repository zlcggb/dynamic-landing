import React from 'react';
import { NavBar } from './Slide2';

const budgetData = [
  {
    label: '核心硬件与组件',
    value: 10414.77,
    percent: 38.6,
    color: '#38bdf8',
    detail: '传感器(LiDAR, D435, M9N)、动力系统、电池、磁力系统部件'
  },
  {
    label: '计算与外设',
    value: 7548.49,
    percent: 28.0,
    color: '#6366f1',
    detail: 'NVIDIA Jetson Orin Nano、PC外设/配件'
  },
  {
    label: '劳务与服务费',
    value: 7560.00,
    percent: 28.0,
    color: '#fbbf24',
    detail: '定制件加工:2500, 软件/云服务:1500, 测试/标定:1000, 学生劳务:2560'
  },
  {
    label: '通用设备与材料',
    value: 1039.04,
    percent: 3.8,
    color: '#22c55e',
    detail: '开发工具、线材、基础测试仪器'
  },
  {
    label: '通信设备',
    value: 431.47,
    percent: 1.6,
    color: '#f472b6',
    detail: '远程数传模块(4G/WiFi)'
  }
];

const total = 27000.00;
const remain = 4.00;

const Slide13: React.FC = () => (
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
        6.1 精准投入：经费预算与使用明细
        <span style={{ fontSize: 18, fontWeight: 500, color: '#0ea5e9', marginLeft: 16 }}>
          研发投入规划 & 成本效益分析
        </span>
      </h1>
      <div style={{ fontSize: 15, color: '#334155', margin: '16px 0 18px 0', fontWeight: 500 }}>
        <span style={{ background: '#e0e7ef', color: '#1e3a8a', borderRadius: 5, padding: '1px 8px', fontWeight: 700 }}>
          总经费
        </span>：￥{total.toLocaleString()}（学校配套），结余：￥{remain}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', alignItems: 'center', marginBottom: 24 }}>
        {/* 饼状图模拟条 */}
        <div style={{ minWidth: 260, maxWidth: 320, flex: '1 1 260px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <svg width="180" height="180" viewBox="0 0 36 36" style={{ margin: '0 auto' }}>
            {/* 饼图环形分段 */}
            {(() => {
              const radius = 18;
              const circumference = 2 * Math.PI * radius;
              let acc = 0;
              return budgetData.map(item => {
                const dash = (item.percent / 100) * circumference;
                const gap = circumference - dash;
                const el = (
                  <circle
                    key={item.label}
                    r={radius}
                    cx={radius}
                    cy={radius}
                    fill="none"
                    stroke={item.color}
                    strokeWidth="6"
                    strokeDasharray={`${dash} ${gap}`}
                    strokeDashoffset={-acc}
                  />
                );
                acc += dash;
                return el;
              });
            })()}
            <circle r="13" cx="18" cy="18" fill="#fff" />
          </svg>
          <div style={{ fontWeight: 700, color: '#0ea5e9', fontSize: 18, marginTop: -118 }}>经费结构</div>
        </div>
        {/* 明细列表 */}
        <div style={{ minWidth: 340, maxWidth: 480, flex: '2 1 340px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {budgetData.map(item => (
            <div key={item.label} style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#f8fafc',
              borderRadius: 12,
              padding: '10px 14px 10px 0',
              marginLeft: 8,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <div style={{ width: 14, height: 14, borderRadius: 7, background: item.color, marginRight: 14, flexShrink: 0 }} />
                <div style={{ fontWeight: 800, color: '#1e3a8a', fontSize: 15, minWidth: 92 }}>{item.label}</div>
                <div style={{ flex: 1 }} />
                <div style={{ color: '#0ea5e9', fontWeight: 700, fontSize: 15, minWidth: 98, textAlign: 'right' }}>￥{item.value.toLocaleString()}</div>
                <div style={{ color: '#64748b', fontWeight: 500, fontSize: 13, minWidth: 54, textAlign: 'right', marginLeft: 8 }}>({item.percent}%)</div>
              </div>
              <div style={{ color: '#334155', fontWeight: 500, fontSize: 13, marginLeft: 28, marginTop: 3, lineHeight: 1.6 }}>{item.detail}</div>
            </div>
          ))}
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
        结论：经费用于购买核心研发所需的硬件、计算平台及必要的支撑服务，支出结构合理
      </div>
    </div>
  </div>
);

export default Slide13;
