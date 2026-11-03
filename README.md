# Insure

独立 React / Next.js / TypeScript 响应式官网模板，默认中文，英文路径为 /en。

Node 版本见 .nvmrc；pnpm 版本见 package.json。在本地 WSL 的 Linux 文件系统执行：

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm start
```

默认 http://localhost:43731；通过 PORT 修改端口，Ctrl+C 停止。表单明确只执行本地校验，不发送、不存储数据。

修改品牌：src/features/site-templates/catalog/insuure/config/brand.ts；修改文案：content/；主题：tokens.css、theme.css；公共交互：components/；页面：pages/；路由：meta.ts。使用与交付边界详见 .tpl/README.md。
