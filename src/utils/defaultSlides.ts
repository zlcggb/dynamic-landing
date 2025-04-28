import { Slide } from '../types';

export const defaultSlides: Slide[] = [
  // Title Slide
  {
    id: 'slide-1',
    background: '#ffffff',
    elements: [
      {
        id: 'title-1',
        type: 'text',
        content: '智能空中机动：无人机的动态降落与多传感器融合技术',
        position: { x: 40, y: 150, width: 880, height: 80 },
        style: { 
          fontSize: 36, 
          fontWeight: 'bold', 
          textAlign: 'center',
          color: '#1e40af'
        }
      },
      {
        id: 'subtitle-1',
        type: 'text',
        content: '技术路径、商业价值与未来布局',
        position: { x: 40, y: 250, width: 880, height: 40 },
        style: { 
          fontSize: 24, 
          fontWeight: 'normal', 
          textAlign: 'center',
          color: '#475569'
        }
      },
      {
        id: 'team-1',
        type: 'text',
        content: '团队成员: 郑婧怡、范靖轩、陈文怡、伍锦豪、鲁宗涛、唐颖琦',
        position: { x: 40, y: 320, width: 880, height: 30 },
        style: { 
          fontSize: 18, 
          fontWeight: 'normal', 
          textAlign: 'center',
          color: '#64748b'
        }
      },
      {
        id: 'advisors-1',
        type: 'text',
        content: '指导教师: 程涛 (技术路径指导), 黄雪 (商业运营指导)',
        position: { x: 40, y: 360, width: 880, height: 30 },
        style: { 
          fontSize: 18, 
          fontWeight: 'normal', 
          textAlign: 'center',
          color: '#64748b'
        }
      },
      {
        id: 'image-1',
        type: 'image',
        content: 'https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        position: { x: 300, y: 400, width: 360, height: 200 },
        style: {}
      }
    ]
  },
  
  // Agenda Slide
  {
    id: 'slide-2',
    background: '#f8fafc',
    elements: [
      {
        id: 'title-2',
        type: 'text',
        content: '议程',
        position: { x: 40, y: 40, width: 880, height: 60 },
        style: { 
          fontSize: 32, 
          fontWeight: 'bold', 
          textAlign: 'center',
          color: '#1e40af'
        }
      },
      {
        id: 'agenda-2',
        type: 'text',
        content: `1. 项目背景：市场机遇与环境扫描 (PESTLE Analysis)
   - 宏观环境分析，识别政策、经济、社会、技术等外部机遇与风险。\n   - [🌏]
2. 项目背景：行业痛点与客户需求 (Value Proposition Canvas - Pains)
   - 行业普遍问题与客户实际痛点梳理，明确需求驱动力。\n   - [💡]
3. 项目背景：目标市场与需求量化 (Customer Segmentation)
   - 明确细分市场，量化潜在用户与需求规模。\n   - [📊]
4. 系统设计：技术价值链与架构 (Value Chain Analysis & Architecture)
   - 技术实现路径、关键环节与系统整体架构。\n   - [🛠️]
5. 系统设计：核心技术模块与创新布局 (Technical Layout & Innovation)
   - 主要技术模块、创新点与专利布局。\n   - [🔬]
6. 项目完成：计划 vs 实际 - KPI 对比 (KPI Analysis)
   - 关键绩效指标完成情况对比，项目进度复盘。\n   - [📈]
7. 项目完成：成果量化与性能标杆 (Benchmarking)
   - 项目成果与行业标杆数据对比，优势量化。\n   - [🏅]
8. 困难与对策：挑战识别与解决路径 (Problem/Solution Fit & Advisor Input)
   - 主要挑战及对应解决策略，专家建议采纳情况。\n   - [🧩]
9. 团队分工：专业协同与贡献流程 (Balanced Scorecard - L&G & Workflow)
   - 团队成员分工、协作流程及能力成长。\n   - [🤝]
10. 经费使用：成本效益与资源配置 (Cost-Benefit Analysis)
   - 经费分配、资源利用与成本效益分析。\n   - [💰]
11. 商业展望：优势、机遇与定位 (SWOT Analysis - S/O & STP)
   - 项目优势、机会及市场定位分析。\n   - [🚀]
12. 商业展望：未来战略与模式初探 (BCG Matrix & Lean Canvas Elements)
   - 未来商业模式、战略布局与成长路径。\n   - [📅]`,
        position: { x: 80, y: 120, width: 800, height: 440 },
        style: { 
          fontSize: 18, 
          lineHeight: 1.5,
          textAlign: 'left',
          color: '#334155'
        }
      },
      {
        id: 'agenda-icons-2',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f30f.png', // 示例地球图标
        position: { x: 830, y: 130, width: 32, height: 32 },
        style: {}
      },
      {
        id: 'agenda-icons-2b',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4a1.png', // 示例灯泡图标
        position: { x: 830, y: 170, width: 32, height: 32 },
        style: {}
      },
      {
        id: 'agenda-icons-2c',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4ca.png', // 示例图表图标
        position: { x: 830, y: 210, width: 32, height: 32 },
        style: {}
      },
      {
        id: 'agenda-icons-2d',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f6e0.png', // 示例工具图标
        position: { x: 830, y: 250, width: 32, height: 32 },
        style: {}
      },
      {
        id: 'agenda-icons-2e',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f52c.png', // 示例显微镜图标
        position: { x: 830, y: 290, width: 32, height: 32 },
        style: {}
      },
      {
        id: 'agenda-icons-2f',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c8.png', // 示例KPI图标
        position: { x: 830, y: 330, width: 32, height: 32 },
        style: {}
      },
      {
        id: 'agenda-icons-2g',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3c5.png', // 示例奖牌图标
        position: { x: 830, y: 370, width: 32, height: 32 },
        style: {}
      },
      {
        id: 'agenda-icons-2h',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f9e9.png', // 示例拼图图标
        position: { x: 830, y: 410, width: 32, height: 32 },
        style: {}
      },
      {
        id: 'agenda-icons-2i',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f91d.png', // 示例握手图标
        position: { x: 830, y: 450, width: 32, height: 32 },
        style: {}
      },
      {
        id: 'agenda-icons-2j',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4b0.png', // 示例钱袋图标
        position: { x: 830, y: 490, width: 32, height: 32 },
        style: {}
      },
      {
        id: 'agenda-icons-2k',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f680.png', // 示例火箭图标
        position: { x: 830, y: 530, width: 32, height: 32 },
        style: {}
      },
      {
        id: 'agenda-icons-2l',
        type: 'image',
        content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c5.png', // 示例日历图标
        position: { x: 830, y: 570, width: 32, height: 32 },
        style: {}
      }
    ]
  }
];