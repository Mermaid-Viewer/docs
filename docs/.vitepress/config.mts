import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mermaid Viewer Docs",
  description: "Docs for Mermaid Viewer (https://mermaidviewer.com)",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
          { text: 'Full Screen Editor', link: '/mermaid-viewer/full-screen-editor' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
