# 验证

在本地 WSL Linux 文件系统执行 pnpm install --frozen-lockfile、pnpm typecheck、pnpm lint、pnpm test、pnpm build，启动后运行 node scripts/verify-http.mjs http://127.0.0.1:43731。最终命令时间、结果与源码摘要见 reports/verification.json。

内置浏览器结果见 reports/browser.json，动效清单和明确差异见 MOTION.md。三端展示截图为真实捕获，尺寸按 WebP 解码结果登记。减少动态效果的系统偏好切换及所有动效逐帧精确时长仍未完成验证。

1.0.2 新增超宽屏导航回归：3840 / 2560 / 1920 / 1440 / 834 / 390 / 320px，中英文首页及两类内页共18项检查。背景层铺满整行，内部导航内容独立限宽，避免宽屏两侧露白。
