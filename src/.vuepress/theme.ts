import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  // 网站部署地址（替换为你的实际地址）
  hostname: "https://liqing6666666.github.io/study/",

  // 作者信息（替换为你的信息）
  author: {
    name: "离卿",
  },

  // 网站Logo（可替换为你的图片，或删除此行使用默认）
  logo: "https://liqing6666666.github.io/study/assets/images/avatar.png", // 图片放在 public/images 目录下

  // 代码仓库地址（替换为你的仓库，或删除）
  repo: "liqing6666666/study",

  // 文档存放目录（保持默认即可）
  docsDir: "src",

  // 博客配置（精简社交链接）
  blog: {
    avatar: "https://liqing6666666.github.io/study/assets/images/avatar.png", // 头像图片路径
    medias: {
      // 只保留你需要的社交平台，删除其他
      GitHub: "https://github.com/liqing6666666", // 可选
      BiliBili:"https://space.bilibili.com/1836488013"
    },
    // 博客描述和介绍页（根据需要修改）
    description: "离卿的学习博客",
    intro: "/intro.html", // 如需介绍页保留，否则删除
  },

  // 中文本地化配置
  locales: {
    "/": {
      navbar: zhNavbar, // 导航栏配置（需自己维护）
      sidebar: zhSidebar, // 侧边栏配置（需自己维护）
      footer: "© 离卿 2025", // 自定义页脚
      displayFooter: true,
      metaLocales: {
        editLink: "编辑此页",
      },
    },
  },



  // Markdown 功能（只保留常用基础功能）
  markdown: {
    align: true, // 文本对齐
    attrs: true, // 元素属性
    codeTabs: true, // 代码标签页
    figure: true, // 图片带标题
    imgLazyload: true, // 图片懒加载
    imgSize: true, // 图片尺寸设置
    mark: true, // 标记文本
    sub: true, // 下标
    sup: true, // 上标
    tasklist: true, // 任务列表
    gfm: true, // GitHub Flavored Markdown
  },

  // 插件配置（只保留必要插件）
  plugins: {
    blog: true, // 启用博客功能

    // 组件插件（保留基础组件）
    components: {
      components: ["Badge", "VPCard"],
    },

    // 图标插件（使用简约配置）
    icon: {
      prefix: "fa6-solid:",
    },
    // 如需其他插件（如评论、PWA），可在此添加，否则保持精简
  },
});