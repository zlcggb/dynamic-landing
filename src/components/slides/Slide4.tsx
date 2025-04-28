import React from 'react';
import { NavBar } from './Slide2';

const Slide4: React.FC = () => (
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
    <NavBar current={0} />
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
        1.2 动态降落需求分析
      </h1>
      <h2 style={{ fontSize: 18, fontWeight: 500, color: '#334155', marginTop: 8 }}>
        精准降落的鸿沟：现有技术的痛点与高价值需求
      </h2>
      {/* 环形对比分析布局 */}
      <section style={{ marginTop: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', minHeight: 340 }}>
          {/* 左侧：痛点 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 22 }}>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1e40af', marginBottom: 8, textAlign: 'right', marginRight: 8 }}>
              客户核心痛点
            </h3>
            {[{ title: '定位失准', detail: '米级精度难以厘米级对接', color: '#0ea5e9' },
              { title: '作业受限', detail: '恶劣环境下可靠性低', color: '#6366f1' },
              { title: '动态无力', detail: '难以精准降落移动目标', color: '#fbbf24' },
              { title: '效率低下', detail: '需人工干预，运营成本高', color: '#22c55e' },
              { title: '安全风险', detail: '降落失败造成经济与安全损失', color: '#f87171' }]
              .map((item, idx) => (
                <div key={item.title} style={{ background: 'rgba(240,247,255,0.97)', borderRadius: 16, padding: '14px 18px', textAlign: 'right', boxShadow: '0 2px 8px rgba(30,64,175,0.04)', minHeight: 56, borderRight: `5px solid ${item.color}` }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: item.color, letterSpacing: 1 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#475569', marginTop: 5, fontWeight: 500 }}>{item.detail}</div>
                </div>
            ))}
          </div>
          {/* 中心SVG环形箭头 */}
          <div style={{ flex: 'none', width: 120, height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <svg width="120" height="240" viewBox="0 0 120 240" style={{ position: 'absolute', left: 0, top: 0 }}>
              {/* 半圆形箭头：蓝色从上到下 */}
              <path d="M60,40 A80 80 0 0 1 60,200" fill="none" stroke="#0ea5e9" strokeWidth="9" />
              <polygon points="60,200 70,185 50,185" fill="#0ea5e9" />
              {/* 半圆形箭头：紫色从下到上 */}
              <path d="M60,200 A80 80 0 0 1 60,40" fill="none" stroke="#6366f1" strokeWidth="9" />
              <polygon points="60,40 50,55 70,55" fill="#6366f1" />
            </svg>
            <div style={{ position: 'absolute', left: 0, top: '50%', width: 120, textAlign: 'center', fontWeight: 700, color: '#64748b', fontSize: 15, letterSpacing: 1, transform: 'translateY(-50%)' }}>
              鸿沟
            </div>
          </div>
          {/* 右侧：需求 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 28 }}>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1e40af', marginBottom: 8, textAlign: 'left', marginLeft: 8 }}>
              目标客户与需求
            </h3>
            {[{ title: '智慧物流', detail: '厘米级对接，提升最后一公里效率', color: '#0ea5e9' },
              { title: '应急救援', detail: '复杂环境下精准物资投送保障安全', color: '#6366f1' },
              { title: '自动化巡检', detail: '无人值守返航与智能充电需求', color: '#fbbf24' },
              { title: '高效运营', detail: '智能调度，降低人力与成本', color: '#22c55e' },
              { title: '安全保障', detail: '降落全流程监控，提升安全性', color: '#f87171' }]
              .map((item, idx) => (
                <div key={item.title} style={{ background: 'rgba(247,248,250,0.97)', borderRadius: 16, padding: '14px 18px', textAlign: 'left', boxShadow: '0 2px 8px rgba(30,64,175,0.04)', minHeight: 56, borderLeft: `5px solid ${item.color}` }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: item.color, letterSpacing: 1 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#475569', marginTop: 5, fontWeight: 500 }}>{item.detail}</div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Slide4;
