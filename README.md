# Ellen 小小游戏合集

一个简单的本地静态网页小游戏集合，主页会从 `games.json` 动态读取游戏列表并渲染卡片；点击卡片上的「Play」按钮，会通过 `play.html?game=<slug>` 以 iframe 方式加载对应的游戏目录；也可以选择「Open in new tab」在新标签打开游戏目录。

> 提示：由于主页通过 `fetch('./games.json')` 加载数据，直接双击 `index.html` 用 `file://` 打开会被浏览器的安全策略拦截。请使用本地静态服务器方式访问。

## 🎮 游戏列表

目前包含 **6 款** 精心制作的小游戏：

| 游戏名称 | 类型 | 描述 | 特色功能 |
|---------|------|------|----------|
| 🏛️ **Ellen's Chess** | 策略类 | 经典国际象棋游戏 | 完整规则、悔棋功能、移动记录 |
| 🔤 **Ellen's Missing Letter** | 益智类 | 填字母游戏 | 词汇学习、智能提示 |
| 🍬 **单词拼拼消** | 消除类 | 单词三消游戏 | 英文词汇、连锁消除 |
| 🧠 **Ellen's Memory Card Match** | 记忆类 | 翻牌记忆游戏 | 多种难度、计时挑战 |
| 🔢 **Ellen's Sudoku** | 逻辑类 | 数独谜题游戏 | 脑力训练、逻辑推理 |
| ⭕ **Ellen's Tic Tac Toe** | 策略类 | 井字棋游戏 | 胜率分析、AI对战 |

> 所有游戏均为纯前端实现，无需联网，支持桌面和移动设备。

---

## 目录结构

```
Ellen-littlegame/
├── games/                    # 各个游戏的目录
│   ├── chess/                # Ellen's Chess - 国际象棋游戏
│   │   ├── index.html
│   │   └── cover-info.txt    # 封面图片创建说明
│   ├── filling-letter/       # Ellen's Missing Letter - 填字母游戏
│   │   ├── index.html
│   │   └── cover.png
│   ├── match-3/              # 单词拼拼消 - 三消游戏
│   │   └── index.html
│   ├── memory-card-match/    # Ellen's Memory Card Match - 记忆翻牌游戏
│   │   ├── index.html
│   │   ├── script.js
│   │   ├── style.css
│   │   └── cover.png
│   ├── sudoku/               # Ellen's Sudoku - 数独游戏
│   │   ├── index.html
│   │   └── cover.png
│   └── tic-tac-toe/          # Ellen's Tic Tac Toe - 井字棋游戏
│       ├── index.html
│       └── cover.png
├── games.json                # 游戏清单（主页读取并渲染）
├── index.html                # 游戏列表首页（带搜索框）
├── play.html                 # 以 iframe 方式加载某个游戏
└── README.md                 # 项目说明文档
```

---

## 本地运行

任选其一：

- 方式一（推荐，Python）：
  1. 在终端切到本目录：`cd Ellen-littlegame`
  2. 启动静态服务器：`python3 -m http.server 8000`
  3. 浏览器访问：`http://localhost:8000/`

- 方式二（VS Code 扩展）：
  - 安装并使用「Live Server」扩展，在 `Ellen-littlegame` 目录右键选择「Open with Live Server」。

- 方式三（任意静态服务器）：
  - 使用 `serve`、`http-server`、Nginx 等均可，只需将站点根指向 `Ellen-littlegame` 目录。

---

## 使用说明

- 首页搜索：输入关键词会在「标题/描述」中匹配，实时过滤卡片。
- 播放游戏：
  - 「Play」按钮会跳转到 `play.html?game=<slug>` 并在 iframe 中加载 `./games/<slug>/`。
  - 「Open in new tab」会在新标签直接打开该目录（`./games/<slug>/`）。
- 年份显示：页脚年份自动更新为当前年份。

---

## 添加新游戏

1. 在 `games/` 下新建目录，目录名作为 `slug`，仅使用小写字母、数字和连字符（例如：`my-new-game`）。
2. 在该目录中至少包含：
   - `index.html`（游戏入口页）
   - `cover.png`（用于首页卡片的封面图，建议 16:9）
3. 在根目录的 `games.json` 中追加一项：
   ```json
   {
     "slug": "my-new-game",
     "title": "My New Game",
     "desc": "一句话描述这个游戏",
     "thumb": "games/my-new-game/cover.png"
   }
   ```
   
   **实际示例（国际象棋游戏）：**
   ```json
   {
     "slug": "chess",
     "title": "Ellen's Chess",
     "desc": "Classic chess game with beautiful interface",
     "thumb": "games/chess/cover.png"
   }
   ```
4. 回到首页刷新即可看到新游戏卡片。点击「Play」可以通过 `play.html` 载入该游戏。

> 兼容性：`play.html` 会校验 `slug` 是否只含小写字母、数字和连字符，非法参数不会加载。

---

## 部署到线上

这是纯静态站点，可直接部署到任意静态托管服务：
- GitHub Pages / GitLab Pages / Cloudflare Pages
- Netlify / Vercel
- 任意支持静态网站的对象存储或 Web 服务器

将根目录指向 `Ellen-littlegame`，确保 `games.json` 能被正常访问（首页对该文件使用了 `cache: 'no-store'`，方便更新后立即生效）。

---

## 浏览器兼容

- 现代桌面与移动浏览器（Chrome、Edge、Safari、Firefox）
- 页面为响应式布局，适配手机与平板

---

## 授权 & 致谢

- 仅用于学习与家庭娱乐目的。
- 游戏与页面由作者自维护，Ellen 提供创意灵感。
