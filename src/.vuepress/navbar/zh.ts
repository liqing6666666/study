import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/blogs/",
    children: [
      { text: "解决github静态部署的图片不显示问题", icon: "pen-to-square", link: "2025_10_20_20/" },
      { text: "markdown学习", icon: "pen-to-square", link: "2025_10_21_20/" },
      { text: "解决github远程连接不上的问题", icon: "pen-to-square", link: "2025_10_21_22/" },
      { text: "yaml学习", icon: "pen-to-square", link: "2025_10_22_9/" },
      { text: "git学习", icon: "pen-to-square", link: "2025_10_22_14/" },
    ],
  },
]);
