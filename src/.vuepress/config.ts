import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/study/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for Li Qing",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客展示",
      description: "离卿的博客展示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
