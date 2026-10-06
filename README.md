<img width="1024" height="1536" alt="49f83b782a7e20c8212deea3cd425c74" src="https://github.com/user-attachments/assets/f4cdfc77-3a3f-4a2a-91ce-e4dae417fadc" /># 微信小程序
面向血友病患者及其家属的简单Webview小程序，提供首页资讯与诊所地图两个入口。

> 当前仓库为 **WebView 壳**，页面内容由 H5 站点 `https://xueyou.xyz/map` 承载。
> 上线小程序名为“**血友支持网络丨附近服务点查找**”；但近期因微信认证到期等原因出现无法访问，血友病注射支持地图临时链接：
https://xueyou-map-slay-d3g2c88il5c345199.webapps.tcloudbase.com/map/
<img width="1024" height="1536" alt="49f83b782a7e20c8212deea3cd425c74" src="https://github.com/user-attachments/assets/362386d2-e6b8-4e19-8248-0c1e9c88450d" />

## 功能

- 🏠 **首页** — 加载 `/home/`
- 🗺️ **诊所地图** — 加载 `/map/`，查找附近可注射的医院
- 🔗 **转发分享** — 两个页面均支持

## 技术栈

- 原生小程序 + `web-view`（Hybrid 壳）
- 基础库 `2.19.4` / `3.15.0`，AppID `wxf56c919f72935d6c`

## 目录结构

```
├── app.js / app.json / app.wxss   # 全局逻辑、配置、样式
├── project.config.json            # 项目配置（含 AppID）
├── images/                        # tabBar 图标
└── pages/
    ├── index/                     # 首页
    └── map/                       # 诊所地图
```

## 运行

1. 微信开发者工具导入项目（替换为自己的 AppID）
2. 编辑 `app.js` 中的 `baseUrl`
3. 在公众平台将域名加入「服务器域名」与「业务域名」
4. 编译预览

## 自定义

- **标题 / 主题色**：改 `app.json`
- **图标**：替换 `images/` 下 PNG（建议 81×81 px）

## License

未指定，如需开源请补充 `LICENSE`。
