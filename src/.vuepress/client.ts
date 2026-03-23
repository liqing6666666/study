// src/.vuepress/client.ts
// 修正导入路径
import { defineClientConfig } from "vuepress/client";
import { nextTick, onMounted } from "vue";

export default defineClientConfig({
  setup() {
    // 核心：onMounted 仅在客户端执行
    onMounted(async () => {
      // 核心函数：给所有 img 标签添加 referrerPolicy="no-referrer"
      const addReferrerPolicy = () => {
        const imgs = document.querySelectorAll("img");
        imgs.forEach((img) => {
          if (!img.hasAttribute("referrerPolicy")) {
            img.setAttribute("referrerPolicy", "no-referrer");
          }
        });
      };

      // 初始化
      await nextTick();
      addReferrerPolicy();
      setTimeout(() => addReferrerPolicy(), 100);
      setTimeout(() => addReferrerPolicy(), 500);


      // 监听路由切换
      window.addEventListener("routeChangeAfter", async () => {
        await nextTick();
        setTimeout(addReferrerPolicy, 100);
      });

      // 监听 DOM 动态变化
      const domObserver = new MutationObserver((mutations) => {
        let hasNewNode = false;
        mutations.forEach((mutation) => {
          if (mutation.addedNodes.length > 0) hasNewNode = true;
        });
        if (hasNewNode) addReferrerPolicy();
      });

      domObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  },
});