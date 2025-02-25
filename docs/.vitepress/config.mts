import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Mermaid Viewer Docs",
  description: "Docs for Mermaid Viewer (https://mermaidviewer.com)",

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Mermaid Viewer Docs'
  },
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.mermaidviewer.com',
    lastmodDateOnly: false
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Mermaid Viewer Docs',
      description: 'Docs for Mermaid Viewer',
      themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'Mermaid Viewer Docs',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Introduction', link: '/introduction/what-is-mermaid' },
          { text: 'Diagrams', link: '/diagrams/flowchart' },
          { text: 'Mermaid Viewer', link: '/mermaid-viewer/introduction' }
        ],

        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'What is Mermaid', link: '/introduction/what-is-mermaid' },
              { text: 'Getting Started', link: '/introduction/getting-started' }
            ]
          },
          {
            text: 'Diagram Types',
            items: [
              { text: 'Flowchart', link: '/diagrams/flowchart' },
              { text: 'Sequence Diagram', link: '/diagrams/sequence' },
              { text: 'Class Diagram', link: '/diagrams/class' },
              { text: 'State Diagram', link: '/diagrams/state' },
              { text: 'ER Diagram', link: '/diagrams/er' },
              { text: 'User Journey', link: '/diagrams/user-journey' },
              { text: 'Gantt Chart', link: '/diagrams/gantt' },
              { text: 'Pie Chart', link: '/diagrams/pie' },
              { text: 'Requirement Diagram', link: '/diagrams/requirement' },
              { text: 'Git Graph', link: '/diagrams/git' },
              { text: 'C4 Diagram', link: '/diagrams/c4' },
              { text: 'Mind Map', link: '/diagrams/mindmap' },
              { text: 'Timeline', link: '/diagrams/timeline' }
            ]
          },
          {
            text: 'Mermaid Viewer',
            items: [
              { text: 'Introduction', link: '/mermaid-viewer/introduction' },
              { text: 'How to Use', link: '/mermaid-viewer/how-to-use' },
              { text: 'Live Editor', link: '/mermaid-viewer/live-editor' }
            ]
          }
        ]
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Mermaid Viewer 文档',
      description: 'Mermaid Viewer 官方文档',
      link: '/zh/',
      themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'Mermaid Viewer 文档',
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '简介', link: '/zh/introduction/what-is-mermaid' },
          { text: '图表类型', link: '/zh/diagrams/flowchart' },
          { text: 'Mermaid Viewer', link: '/zh/mermaid-viewer/introduction' }
        ],

        sidebar: [
          {
            text: '简介',
            items: [
              { text: '什么是 Mermaid', link: '/zh/introduction/what-is-mermaid' },
              { text: '快速开始', link: '/zh/introduction/getting-started' }
            ]
          },
          {
            text: '图表类型',
            items: [
              { text: '流程图', link: '/zh/diagrams/flowchart' },
              { text: '时序图', link: '/zh/diagrams/sequence' },
              { text: '类图', link: '/zh/diagrams/class' },
              { text: '状态图', link: '/zh/diagrams/state' },
              { text: 'ER图', link: '/zh/diagrams/er' },
              { text: '用户旅程图', link: '/zh/diagrams/user-journey' },
              { text: '甘特图', link: '/zh/diagrams/gantt' },
              { text: '饼图', link: '/zh/diagrams/pie' },
              { text: '需求图', link: '/zh/diagrams/requirement' },
              { text: 'Git图', link: '/zh/diagrams/git' },
              { text: 'C4架构图', link: '/zh/diagrams/c4' },
              { text: '思维导图', link: '/zh/diagrams/mindmap' },
              { text: '时间线', link: '/zh/diagrams/timeline' }
            ]
          },
          {
            text: 'Mermaid Viewer',
            items: [
              { text: '官网介绍', link: '/zh/mermaid-viewer/introduction' },
              { text: '如何使用', link: '/zh/mermaid-viewer/how-to-use' },
              { text: '实时编辑器', link: '/zh/mermaid-viewer/live-editor' }
            ]
          }
        ]
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'Mermaid Viewer ドキュメント',
      description: 'Mermaid Viewer の公式ドキュメント',
      link: '/ja/',
      themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'Mermaid Viewer ドキュメント',
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: '紹介', link: '/ja/introduction/what-is-mermaid' },
          { text: 'ダイアグラム', link: '/ja/diagrams/flowchart' },
          { text: 'Mermaid Viewer', link: '/ja/mermaid-viewer/introduction' }
        ],

        sidebar: [
          {
            text: '紹介',
            items: [
              { text: 'Mermaidとは', link: '/ja/introduction/what-is-mermaid' },
              { text: '始め方', link: '/ja/introduction/getting-started' }
            ]
          },
          {
            text: 'ダイアグラムの種類',
            items: [
              { text: 'フローチャート', link: '/ja/diagrams/flowchart' },
              { text: 'シーケンス図', link: '/ja/diagrams/sequence' },
              { text: 'クラス図', link: '/ja/diagrams/class' },
              { text: '状態遷移図', link: '/ja/diagrams/state' },
              { text: 'ER図', link: '/ja/diagrams/er' },
              { text: 'ユーザージャーニー', link: '/ja/diagrams/user-journey' },
              { text: 'ガントチャート', link: '/ja/diagrams/gantt' },
              { text: '円グラフ', link: '/ja/diagrams/pie' },
              { text: '要求図', link: '/ja/diagrams/requirement' },
              { text: 'Gitグラフ', link: '/ja/diagrams/git' },
              { text: 'C4図', link: '/ja/diagrams/c4' },
              { text: 'マインドマップ', link: '/ja/diagrams/mindmap' },
              { text: 'タイムライン', link: '/ja/diagrams/timeline' }
            ]
          },
          {
            text: 'Mermaid Viewer',
            items: [
              { text: '紹介', link: '/ja/mermaid-viewer/introduction' },
              { text: '使い方', link: '/ja/mermaid-viewer/how-to-use' },
              { text: 'ライブエディタ', link: '/ja/mermaid-viewer/live-editor' }
            ]
          }
        ]
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      title: 'Mermaid Viewer 문서',
      description: 'Mermaid Viewer 공식 문서',
      link: '/ko/',
      themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'Mermaid Viewer 문서',
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '소개', link: '/ko/introduction/what-is-mermaid' },
          { text: '다이어그램', link: '/ko/diagrams/flowchart' },
          { text: 'Mermaid Viewer', link: '/ko/mermaid-viewer/introduction' }
        ],

        sidebar: [
          {
            text: '소개',
            items: [
              { text: 'Mermaid란', link: '/ko/introduction/what-is-mermaid' },
              { text: '시작하기', link: '/ko/introduction/getting-started' }
            ]
          },
          {
            text: '다이어그램 유형',
            items: [
              { text: '순서도', link: '/ko/diagrams/flowchart' },
              { text: '시퀀스 다이어그램', link: '/ko/diagrams/sequence' },
              { text: '클래스 다이어그램', link: '/ko/diagrams/class' },
              { text: '상태 다이어그램', link: '/ko/diagrams/state' },
              { text: 'ER 다이어그램', link: '/ko/diagrams/er' },
              { text: '사용자 여정', link: '/ko/diagrams/user-journey' },
              { text: '간트 차트', link: '/ko/diagrams/gantt' },
              { text: '파이 차트', link: '/ko/diagrams/pie' },
              { text: '요구사항 다이어그램', link: '/ko/diagrams/requirement' },
              { text: 'Git 그래프', link: '/ko/diagrams/git' },
              { text: 'C4 다이어그램', link: '/ko/diagrams/c4' },
              { text: '마인드맵', link: '/ko/diagrams/mindmap' },
              { text: '타임라인', link: '/ko/diagrams/timeline' }
            ]
          },
          {
            text: 'Mermaid Viewer',
            items: [
              { text: '소개', link: '/ko/mermaid-viewer/introduction' },
              { text: '사용 방법', link: '/ko/mermaid-viewer/how-to-use' },
              { text: '라이브 편집기', link: '/ko/mermaid-viewer/live-editor' }
            ]
          }
        ]
      }
    }
  }
})
