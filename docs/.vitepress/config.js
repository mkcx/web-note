export default {
  title: 'web文档',
  titleTemplate: 'Vite & Vue powered static site generator',
  description: 'Just playing around.',
  themeConfig: {
    nav: [{ text: '指南', link: '/guide/index.md', activeMatch: '/config/' }],
    sidebar: [
      {
        text: 'http相关',
        collapsible: true,
        items: [{ text: 'http常用状态码', link: '/http/statusCode.md' }]
      }
    ]
  }
}
