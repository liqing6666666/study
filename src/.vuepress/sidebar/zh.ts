import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "博客1",
      icon: "book",
      prefix: "blogs/",
      children: [
        "2025_10_20_20/", // 对应 src/blogs/2025_10_20_20/index.md
        "2025_10_21_20/",
        "2025_10_21_22/",
        "2025_10_22_9/",
        "2025_10_22_14/",
        
      ],
    },
    {
      text: "博客2",
      icon: "book",
      prefix: "new_blogs/",
      children: "structure",
    },
  ],
});
