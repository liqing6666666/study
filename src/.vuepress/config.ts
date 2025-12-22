import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/study/",

  head: [
    // 全局设置所有资源请求不携带Referer
    ["base", { referrerPolicy: "no-referrer" }]
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
