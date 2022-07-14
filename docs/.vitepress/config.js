export default {
  title: "web文档",
  titleTemplate: "Vite & Vue powered static site generator",
  description: "Just playing around.",
  base: "/web-note",
  themeConfig: {
    nav: [{ text: "指南", link: "/guide/index.md", activeMatch: "/config/" }],
    sidebar: [
      {
        text: "http相关",
        collapsible: true,
        items: [
          { text: "初识http", link: "/http/base" },
          { text: "http常用状态码", link: "/http/statusCode.md" },
        ],
      },
      {
        text: "typescript学习笔记",
        collapsible: true,
        items: [{ text: "入门学习笔记", link: "/TS/index" }],
      },
      {
        text: "数据结构与算法",
        collapsible: true,
        items: [
          { text: "什么是数据结构", link: "/DSAA/01-dataStructure" },
          { text: "什么是算法", link: "/DSAA/02-algorithm" },
          { text: "栈结构", link: "/DSAA/03-stack" },
          { text: "队列结构", link: "/DSAA/04-queue" },
          { text: "链表结构", link: "/DSAA/05-linkList" },
        ],
      },
    ],
  },
};
