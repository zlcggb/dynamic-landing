import React from 'react';
import { NavBar } from './Slide2';

const members = [
  {
    name: '郑婧怡',
    major: '中德智能制造',
    role: '结构设计与集成',
    desc: '无人机平台选型、传感器物理布局、结构优化、整机集成',
    percent: 20,
    finish: 100,
    color: '#38bdf8',
    icon: '🛠️'
  },
  {
    name: '范靖轩',
    major: '城市交通',
    role: '控制系统研发',
    desc: 'PID、视觉伺服、磁力辅助控制算法设计、仿真与实机调试',
    percent: 20,
    finish: 100,
    color: '#6366f1',
    icon: '⚙️'
  },
  {
    name: '伍锦豪',
    major: '城市交通',
    role: '路径规划与仿真',
    desc: 'A*+B样条规划算法实现、动态避障、仿真环境搭建与测试',
    percent: 15,
    finish: 100,
    color: '#fbbf24',
    icon: '🗺️'
  },
  {
    name: '鲁宗涛',
    major: '大数据与互联网',
    role: '定位与融合算法',
    desc: 'EKF融合、SLAM(备选)、RTK/IMU数据处理与标定',
    percent: 15,
    finish: 100,
    color: '#22c55e',
    icon: '📡'
  },
  {
    name: '唐颖琦',
    major: '大数据与互联网',
    role: '感知系统开发',
    desc: 'LiDAR/视觉数据处理、YOLOv8目标检测、传感器驱动与ROS接口',
    percent: 15,
    finish: 100,
    color: '#f472b6',
    icon: '👁️'
  },
  {
    name: '陈文怡',
    major: '商学院',
    role: '项目文档与管理支持',
    desc: '报告撰写、资料整理、会议记录、对外联络协调',
    percent: 15,
    finish: 100,
    color: '#a3a3a3',
    icon: '📄'
  }
];

const Slide11: React.FC = () => (
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
        5.1 各司其职：跨专业团队的技术贡献
        <span style={{ fontSize: 18, fontWeight: 500, color: '#0ea5e9', marginLeft: 16 }}>
          专业协同
        </span>
      </h1>
      <div style={{ fontSize: 15, color: '#334155', margin: '16px 0 18px 0', fontWeight: 500 }}>
        分工依据：结合成员专业背景与项目技术模块需求
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', marginBottom: 8 }}>
        {members.map(m => (
          <div key={m.name} style={{
            background: `linear-gradient(120deg,${m.color}20 80%,#f1f5fa 100%)`,
            borderRadius: 22,
            boxShadow: `0 2px 10px ${m.color}22`,
            border: `1.5px solid ${m.color}`,
            padding: '18px 22px 16px 22px',
            minWidth: 230,
            maxWidth: 270,
            flexBasis: 240,
            height: 170,
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 6,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontSize: 22, marginRight: 7 }}>{m.icon}</span>
              <span style={{ fontWeight: 900, color: m.color, fontSize: 16 }}>{m.name} <span style={{ fontWeight: 600, color: '#64748b', fontSize: 14 }}>({m.major})</span></span>
            </div>
            <div style={{ fontSize: 15, color: '#1e293b', fontWeight: 800, marginBottom: 2 }}>{m.role}</div>
            <div style={{ fontSize: 13, color: '#334155', fontWeight: 500 }}>{m.desc}</div>
            <div style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, marginTop: 2 }}>
              工作量：{m.percent}% &nbsp; 完成度：{m.finish}%
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Slide11;
