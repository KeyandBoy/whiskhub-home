# WhiskHub Home

WhiskHub 个人项目导航站主页，基于 Vite + Vue 3 构建的静态页面，部署于 [whiskhub.top](https://whiskhub.top)。

## 项目介绍

这是一个个人项目导航站，用于展示 WhiskHub 已上线的 AI 应用、Web 工具、数据处理项目与开发中的实验项目。

包含以下项目：

- [AI 人生重开手帐](https://ai-life-restart.whiskhub.top)
- [STL 模型爬取与查看工具](https://stl-crawler-viewer.whiskhub.top)
- RuoYi Tutor Platform（开发中）
- STL Classifier Trainer（开发中）

## 本地运行

```bash
npm install
npm run dev
```

## 构建命令

```bash
npm run build
```

构建产物在 `dist/` 目录。

## Vercel 部署说明

1. 推送项目到 GitHub
2. 在 Vercel 中导入该项目
3. 框架选择 Vite
4. 构建命令：`npm run build`
5. 输出目录：`dist`

## 主域名绑定

在 Vercel 项目设置中绑定主域名 `whiskhub.top`。

建议 DNS 配置：

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | @ | cname.vercel-dns.com |
| CNAME | www | cname.vercel-dns.com |
