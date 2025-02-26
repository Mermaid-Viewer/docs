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
import { ref, onMounted, computed } from 'vue';
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

// 多语言标签
const labels = computed(() => {
  const translations = {
    en: { code: 'Code', run: 'Run' },
    'zh-CN': { code: '代码', run: '运行' },
    'ja-JP': { code: 'コード', run: '実行' },
    'ko-KR': { code: '코드', run: '실행' }
  };
  
  // 检测当前语言
  const currentLang = props.lang || document.documentElement.lang || 'en';
  
  // 返回对应语言的标签，如果没有则使用英文
  return translations[currentLang] || translations.en;
});

const ctrlSymbol = computed(() => {
  return navigator.platform.includes('Mac') ? '⌘' : 'Ctrl';
});

const updateCode = (e) => {
  code.value = e.target.textContent;
};

const renderChart = async () => {
  try {
    // 检测当前主题是否为暗色
    const hasDarkClass = document.documentElement.classList.contains('dark');
    
    // 配置 Mermaid
    const mermaidConfig = {
      securityLevel: 'loose',
      startOnLoad: false,
      theme: hasDarkClass ? 'dark' : 'default',
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
}

.editable-code {
  outline: none;
}

.error {
  color: red;
  white-space: pre-wrap;
}
</style> 