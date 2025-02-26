import type { MarkdownRenderer } from 'vitepress';

/**
 * 自定义 Mermaid Markdown 解析器
 */
export default function mermaidMarkdown(md: MarkdownRenderer) {
  // 保存默认的代码块渲染器
  const defaultFence = md.renderer.rules.fence!;

  // 重写代码块渲染规则
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const lang = token.info.trim();

    // 检测是否是 mermaid 代码块
    if (lang === 'mermaid') {
      const key = `mermaid-${idx}`;
      const code = token.content;
      
      // 获取当前页面路径和语言
      let pageLang = 'en';
      if (env && env.relativePath) {
        const pathParts = env.relativePath.split('/');
        // 检查页面路径是否包含语言代码
        if (['zh', 'ja', 'ko'].includes(pathParts[0])) {
          // 将路径中的语言代码映射到完整的语言代码
          const langMap = {
            'zh': 'zh-CN',
            'ja': 'ja-JP',
            'ko': 'ko-KR'
          };
          pageLang = langMap[pathParts[0]] || 'en';
        }
      }
      
      // 将代码块转换为 Mermaid 组件，传递语言信息
      return `
        <Mermaid id="${key}" showCode="true" graph="${encodeURIComponent(code)}" lang="${pageLang}"></Mermaid>
      `;
    }

    // 其他类型的代码块使用默认渲染器
    return defaultFence(tokens, idx, options, env, self);
  };
} 