import React from 'react';

// 可复用的导航栏组件
export const NavBar: React.FC<{ current?: number }> = ({ current }) => {
  const navItems = [
    '项目背景与意义',
    '核心技术方案',
    '技术创新亮点',
    '实验验证与成果',
    '团队分工与协作',
    '经费预算与资源',
    '未来展望与价值',
  ];
  return (
    <nav style={{
      width: '100%',
      background: 'rgba(255,255,255,0.95)',
      borderRadius: 12,
      boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      padding: '8px 0',
      margin: '0 0 12px 0',
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: 0.5,
      position: 'relative',
      zIndex: 10,
    }}>
      {navItems.map((item, idx) => (
        <span
          key={item}
          style={{
            color: current === idx ? '#1e40af' : '#444',
            background: current === idx ? 'rgba(59,130,246,0.1)' : 'transparent',
            borderRadius: 8,
            padding: '2px 12px',
            cursor: 'pointer',
            transition: 'all 0.18s',
            boxShadow: current === idx ? '0 1px 4px rgba(30,58,138,0.1)' : 'none',
          }}
        >
          {idx + 1}. {item}
        </span>
      ))}
    </nav>
  );
};

const iconList = [
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f30f.png', alt: '地球', top: 130 },
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4a1.png', alt: '灯泡', top: 170 },
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4ca.png', alt: '图表', top: 210 },
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f6e0.png', alt: '工具', top: 250 },
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f52c.png', alt: '显微镜', top: 290 },
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c8.png', alt: 'KPI', top: 330 },
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3c5.png', alt: '奖牌', top: 370 },
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f9e9.png', alt: '拼图', top: 410 },
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f91d.png', alt: '握手', top: 450 },
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4b0.png', alt: '钱袋', top: 490 },
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f680.png', alt: '火箭', top: 530 },
  { src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c5.png', alt: '日历', top: 570 },
];

const agendaGroups = [
  {
    title: '1. 项目背景与意义',
    items: [
      '行业趋势与市场机遇',
      '动态降落需求分析',
    ],
    icon: iconList[0],
  },
  {
    title: '2. 核心技术方案',
    items: [
      '动态降落算法原理',
      '多传感器融合方法',
    ],
    icon: iconList[3],
  },
  {
    title: '3. 技术创新亮点',
    items: [
      '自适应降落控制',
      '智能环境感知',
    ],
    icon: iconList[5],
  },
  {
    title: '4. 实验验证与成果',
    items: [
      '典型场景实验',
      '性能指标展示',
    ],
    icon: iconList[7],
  },
  {
    title: '5. 团队分工与协作',
    items: [
      '技术研发分工',
      '项目管理机制',
    ],
    icon: iconList[8],
  },
  {
    title: '6. 经费预算与资源',
    items: [
      '研发投入规划',
      '资源配置方案',
    ],
    icon: iconList[9],
  },
  {
    title: '7. 未来展望与价值',
    items: [
      '产品化与行业应用',
      '社会与经济效益',
    ],
    icon: iconList[10],
  },
];

const Slide2: React.FC = () => (
  <div
    style={{
      background: 'linear-gradient(135deg, #f8fafc 60%, #e9e9eb 100%)',
      width: 960,
      height: 600,
      position: 'relative',
      borderRadius: 32,
      margin: 'auto',
      boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 1.5px 4px rgba(0,0,0,0.04)',
      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
      padding: 0,
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        fontWeight: 700,
        color: '#222',
        letterSpacing: 2,
        background: 'rgba(255,255,255,0.85)',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
        zIndex: 2,
      }}
    >
      目录
    </div>
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 110,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '0 32px 16px 32px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        minHeight: 0,
        height: 'calc(100% - 120px)',
        maxHeight: 'none',
        background: 'linear-gradient(120deg, #f8fafc 70%, #f3f6fa 100%)',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 840,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
        }}
      >
        {agendaGroups.map((group, idx) => (
          <div
            key={group.title}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              background: 'rgba(255,255,255,0.98)',
              borderRadius: 18,
              boxShadow: '0 8px 24px 0 rgba(60,60,60,0.06)',
              padding: '18px 24px',
              gap: 14,
              minHeight: 56,
              transition: 'box-shadow 0.25s cubic-bezier(.4,0,.2,1), transform 0.25s cubic-bezier(.4,0,.2,1)',
              fontWeight: 400,
              willChange: 'box-shadow, transform',
              cursor: 'default',
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px 0 rgba(60,60,60,0.10)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px) scale(1.012)';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px 0 rgba(60,60,60,0.06)';
              (e.currentTarget as HTMLDivElement).style.transform = 'none';
            }}
          >
            <img
              src={group.icon.src}
              alt={group.icon.alt}
              style={{
                width: 24,
                height: 24,
                marginTop: 2,
                filter: 'drop-shadow(0 1px 3px #e0e0e0)',
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 17,
                  color: 'transparent',
                  marginBottom: 2,
                  letterSpacing: 0.5,
                  fontFamily: 'inherit',
                  background: 'linear-gradient(90deg, #1e3a8a 0%, #0ea5e9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {group.title}
              </div>
              <ul style={{ margin: 0, paddingLeft: 16, fontSize: 14, color: '#444', lineHeight: 1.7, fontWeight: 400 }}>
                {group.items.map((item) => (
                  <li key={item} style={{ marginBottom: 0 }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Slide2;
