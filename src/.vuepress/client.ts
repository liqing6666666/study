// src/.vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import { nextTick } from "vue";

export default defineClientConfig({
  setup() {
    // 核心函数：给img添加referrerPolicy
    const addReferrerPolicy = () => {
      const imgs = document.querySelectorAll("img");
      console.log(`当前找到img标签数量：${imgs.length}`);
      imgs.forEach((img) => {
        if (!img.hasAttribute("referrerPolicy")) {
          img.setAttribute("referrerPolicy", "no-referrer");
          console.log("已给1张img添加属性");
        }
      });
    };

    // 方案1：Vue nextTick + 多级延迟，确保等待页面内容渲染
    const initImgPolicy = async () => {
      // 第一步：等待Vue组件首次渲染完成
      await nextTick();
      addReferrerPolicy();

      // 第二步：轻微延迟（应对异步渲染的内容）
      setTimeout(() => {
        addReferrerPolicy();
      }, 100);

      // 第三步：稍长延迟（应对懒加载/慢渲染的图片）
      setTimeout(() => {
        addReferrerPolicy();
      }, 500);
    };

    // 立即执行初始化
    initImgPolicy();

    // 方案2：监听路由切换（页面跳转后重新初始化）
    window.addEventListener("routeChangeAfter", async () => {
      await nextTick();
      setTimeout(addReferrerPolicy, 100);
    });

    // 方案3：监听DOM动态变化（捕获后续新增的img标签，如懒加载图片）
    const domObserver = new MutationObserver((mutations) => {
      // 只要有新节点添加，就重新执行属性添加
      let hasNewNode = false;
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          hasNewNode = true;
        }
      });
      if (hasNewNode) {
        addReferrerPolicy();
      }
    });

    // 监听整个文档的body区域（包括所有后代节点变化）
    domObserver.observe(document.body, {
      childList: true, // 监听子节点添加/删除
      subtree: true,   // 监听所有后代节点
      attributes: false,
      characterData: false,
    });
  },
});