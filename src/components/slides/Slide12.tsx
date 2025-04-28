import React from 'react';
import { NavBar } from './Slide2';

const workflowItems = [
  {
    icon: '💬',
    title: '沟通机制',
    desc: '定期线上/线下例会、技术研讨会、即时通讯群组'
  },
  {
    icon: '🗂️',
    title: '协作平台',
    desc: '代码托管(Git)、共享文档、任务管理工具'
  },
  {
    icon: '🔄',
    title: '开发流程',
    desc: '敏捷迭代，模块化开发，分阶段测试'
  }
];

const mentorItems = [
  {
    icon: '👨‍💻',
    name: '程涛老师',
    desc: '每周/隔周技术指导，聚焦算法难点、系统架构、实验方案'
  },
  {
    icon: '👩‍💼',
    name: '黄雪老师',
    desc: '定期项目管理指导，关注进度、风险、资源协调、报告规范、商业思维'
  }
];

const Slide12: React.FC = () => (
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
    <NavBar current={4} />
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
        5.2 高效协作：项目管理与成长收获
        <span style={{ fontSize: 18, fontWeight: 500, color: '#0ea5e9', marginLeft: 16 }}>
          Balanced Scorecard & Workflow
        </span>
      </h1>
      <div style={{ fontSize: 15, color: '#334155', margin: '16px 0 18px 0', fontWeight: 500 }}>
        <span style={{ background: '#e0e7ef', color: '#1e3a8a', borderRadius: 5, padding: '1px 8px', fontWeight: 700 }}>
          团队成长
        </span>：成员掌握了跨学科知识，提升了工程实践、问题解决和团队协作能力
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', marginBottom: 12 }}>
        {workflowItems.map(item => (
          <div key={item.title} style={{
            background: 'linear-gradient(120deg,#f0fdfa 80%,#f1f5fa 100%)',
            borderRadius: 22,
            boxShadow: '0 2px 10px rgba(14,165,233,0.07)',
            border: '1.5px solid #e0e7ef',
            padding: '18px 22px 16px 22px',
            minWidth: 220,
            maxWidth: 220,
            flexBasis: 220,
            height: 120,
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 6,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontSize: 22, marginRight: 7 }}>{item.icon}</span>
              <span style={{ fontWeight: 800, color: '#1e3a8a', fontSize: 16 }}>{item.title}</span>
            </div>
            <div style={{ fontSize: 14, color: '#334155', fontWeight: 600 }}>{item.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 22, justifyContent: 'center', marginBottom: 14 }}>
        {mentorItems.map(m => (
          <div key={m.name} style={{
            background: 'linear-gradient(120deg,#f0f7ff 80%,#f1f5fa 100%)',
            borderRadius: 20,
            boxShadow: '0 2px 10px rgba(14,165,233,0.08)',
            border: '1.5px solid #bae6fd',
            padding: '18px 22px',
            minWidth: 260,
            maxWidth: 320,
            flex: '1 1 260px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
          }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>{m.icon}</div>
            <div style={{ fontWeight: 800, color: '#0ea5e9', fontSize: 16 }}>{m.name}</div>
            <div style={{ fontSize: 14, color: '#334155', fontWeight: 600, marginBottom: 2 }}>{m.desc}</div>
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
        结论：明确的分工、有效的协作机制和专业的导师指导是项目成功和团队成长的重要保障
      </div>
    </div>
  </div>
);

export default Slide12;
