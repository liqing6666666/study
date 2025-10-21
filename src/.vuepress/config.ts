import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/study/",

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
