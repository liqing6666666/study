import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/study/",

  head: [
    // 引入 MathJax 核心库
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js",
        async: true, // 异步加载提高性能
      },
    ],
    // 配置 MathJax 解析规则（关键！）
    [
      "script",
      {},
      `
        window.MathJax = {
          tex: {
            inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] // 识别行内公式 $...$ 或 \<inline_LaTeX_Formula>...\<\inline_LaTeX_Formula>
          },
          svg: {
            fontCache: 'global'
          }
        };
      `,
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "博客展示",
      description: "离卿的博客展示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
