<template>
  <div class="mermaid-wrapper">
    <!-- 源代码部分 -->
    <div v-if="props.showCode" class="mermaid-code">
      <h5>{{ labels.code }}:</h5>
      <div class="language-mermaid">
        <button class="copy"></button>
        <span class="lang">mermaid</span>
        <pre><code :contenteditable="contentEditable" @input="updateCode" @keydown.meta.enter="renderChart" @keydown.ctrl.enter="renderChart" ref="editableContent" class="editable-code">{{ code }}</code></pre>
        <div class="buttons-container">
          <span>{{ ctrlSymbol }} + Enter</span><span>|</span>
          <button @click="renderChart">{{ labels.run }} ▶</button>
        </div>
      </div>
    </div>
    
    <!-- 渲染后的图表 -->
    <div class="mermaid-chart" ref="mermaidChart" v-html="svg"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, shallowRef, watch, nextTick } from 'vue';
import mermaid from 'mermaid';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  graph: {
    type: String,
    default: ''
  },
  showCode: {
    type: Boolean,
    default: true
  },
  lang: {
    type: String,
    default: 'en'
  }
});

const mermaidChart = ref(null);
const svg = ref('');
const code = ref(decodeURIComponent(props.graph));
const contentEditable = ref(true);
const editableContent = ref(null);
const isDarkMode = ref(false);

// 多语言标签
const labels = computed(() => {
  const translations = {
    en: { code: 'Code', run: 'Run' },
    'zh-CN': { code: '代码', run: '运行' },
    'ja-JP': { code: 'コード', run: '実行' },
    'ko-KR': { code: '코드', run: '실行' }
  };
  
  // 检测当前语言
  const currentLang = props.lang || document.documentElement?.lang || 'en';
  
  // 返回对应语言的标签，如果没有则使用英文
  return translations[currentLang] || translations.en;
});

// 修复 SSR 问题：避免在服务器端访问 navigator
const ctrlSymbol = shallowRef('Ctrl');
onMounted(() => {
  // 只在客户端执行
  ctrlSymbol.value = typeof navigator !== 'undefined' && navigator.platform?.includes('Mac') 
    ? '⌘' 
    : 'Ctrl';
    
  // 初始化暗色模式状态
  if (typeof document !== 'undefined') {
    isDarkMode.value = document.documentElement.classList.contains('dark');
    
    // 监听主题变化
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          const newIsDarkMode = document.documentElement.classList.contains('dark');
          if (isDarkMode.value !== newIsDarkMode) {
            isDarkMode.value = newIsDarkMode;
          }
        }
      }
    });
    
    observer.observe(document.documentElement, { attributes: true });
  }
});

// 监听暗色模式变化，重新渲染图表
watch(isDarkMode, () => {
  nextTick(() => {
    renderChart();
  });
});

const updateCode = (e) => {
  code.value = e.target.textContent;
};

const renderChart = async () => {
  if (typeof document === 'undefined') return; // 避免在 SSR 中执行
  
  try {
    // 获取当前主题
    const hasDarkClass = isDarkMode.value;
    
    // 配置 Mermaid
    const mermaidConfig = {
      securityLevel: 'loose',
      startOnLoad: false,
      theme: hasDarkClass ? 'dark' : 'default',
      darkMode: hasDarkClass,
      themeVariables: hasDarkClass ? {
        // 暗色主题变量
        primaryColor: '#1f2937',
        primaryTextColor: '#f3f4f6',
        primaryBorderColor: '#6b7280',
        lineColor: '#d1d5db',
        secondaryColor: '#374151',
        tertiaryColor: '#111827',
        // 节点颜色
        nodeBorder: '#6b7280',
        nodeTextColor: '#f3f4f6',
        // 关系线颜色
        edgeLabelBackground: '#374151',
        // 背景色
        background: '#1f2937',
        mainBkg: '#374151',
        // 其他颜色
        titleColor: '#f3f4f6',
        altBackground: '#111827',
        // 字体
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      } : {}
    };
    
    // 初始化 Mermaid
    mermaid.initialize(mermaidConfig);
    
    // 渲染为 SVG
    const { svg: renderedSvg } = await mermaid.render(props.id, code.value);
    
    // 添加随机字符串强制重新渲染
    const salt = Math.random().toString(36).substring(7);
    svg.value = `${renderedSvg} <span style="display: none">${salt}</span>`;
  } catch (error) {
    console.error('Mermaid 渲染错误:', error);
    svg.value = `<pre class="error">${error.message}</pre>`;
  }
};

onMounted(() => {
  if (editableContent.value) {
    editableContent.value.textContent = code.value;
  }
  renderChart();
});
</script>

<style>
.mermaid-wrapper {
  margin: 1rem 0;
}

.mermaid-code {
  margin-bottom: 1rem;
}

.buttons-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.buttons-container button {
  padding: 0.25rem 0.5rem;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.buttons-container button:hover {
  background-color: var(--vp-c-brand-dark);
  transform: translateY(-1px);
}

.buttons-container button:active {
  transform: translateY(0);
}

/* 暗色模式下的按钮样式 */
.dark .buttons-container button {
  background-color: var(--vp-c-brand-dark, #3451b2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.dark .buttons-container button:hover {
  background-color: var(--vp-c-brand, #4969d9);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
}

.editable-code {
  outline: none;
}

.error {
  color: red;
  white-space: pre-wrap;
}

/* 暗色模式下的图表样式优化 */
.dark .mermaid-chart svg {
  filter: brightness(0.95);
}

.dark .mermaid-chart .label {
  fill: #f3f4f6;
  color: #f3f4f6;
}

.dark .mermaid-chart .node rect,
.dark .mermaid-chart .node circle,
.dark .mermaid-chart .node ellipse,
.dark .mermaid-chart .node polygon,
.dark .mermaid-chart .node path {
  fill: #374151;
  stroke: #6b7280;
}

.dark .mermaid-chart .edgeLabel {
  background-color: #374151;
  color: #f3f4f6;
}

.dark .mermaid-chart .cluster rect {
  fill: #1f2937;
  stroke: #6b7280;
}
</style> 