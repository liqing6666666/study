import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/",
    children: [
      { text: "解决github静态部署的图片不显示问题", icon: "pen-to-square", link: "blogs/2025_10_20_20/" },
      { text: "markdown学习", icon: "pen-to-square", link: "blogs/2025_10_21_20/" },
      { text: "解决github远程连接不上的问题", icon: "pen-to-square", link: "blogs/2025_10_21_22/" },
      { text: "yaml学习", icon: "pen-to-square", link: "blogs/2025_10_22_9/" },
      { text: "git学习", icon: "pen-to-square", link: "blogs/2025_10_22_14/" },
      { text: "Javascript学习", icon: "pen-to-square", link: "blogs/2025_10_26_13/" },
      {text:"鸿蒙侧滑退出", icon: "pen-to-square", link: "HarmonyOS/2025_12_11_22"},
      {text:"网络请求", icon: "pen-to-square", link: "HarmonyOS/2025_12_12_11"},
      {text:"滑动变换导航栏", icon: "pen-to-square", link: "HarmonyOS/2025_12_12_21"},
      {text:"鸿蒙安全区域", icon: "pen-to-square", link: "HarmonyOS/2025_12_15_22"},
      {text:"图床设置", icon: "pen-to-square", link: "HarmonyOS/2025_12_17_22"},
      {text:"鸿蒙空值检查", icon: "pen-to-square", link: "HarmonyOS/2025_12_22_17"},
      {text:"防盗链设置", icon: "pen-to-square", link: "HarmonyOS/2025_12_22_20"},
    ],
  },
]);