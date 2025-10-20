import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "博客文章",
      icon: "book",
      prefix: "blogs/",
      children: "structure",
    },
  ],
});
