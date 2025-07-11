import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    logo: false,
    name: 'work-boost',
    nav: [
      { title: '指南', link: '/guide' }, // 对应您的guide文件夹
      { title: '关于', link: '/about' }, // 对应您的about文件夹
    ],
    footer: '© 2025 work-boost',
  },
});
