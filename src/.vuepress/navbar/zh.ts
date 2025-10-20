import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/blogs/",
    children: [
      { text: "解决github静态部署的图片不显示问题", icon: "pen-to-square", link: "2025_10_20_20/" },
      { text: "markdown学习", icon: "pen-to-square", link: "2025_10_20_21/" },
    ],
  },
]);
