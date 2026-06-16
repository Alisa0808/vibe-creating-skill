<div align="center">

<img src="assets/social-preview.png" alt="Vibe Creating —— 开源 AI 视频提示词 Skill,适配 Seedance、Sora、Kling、Veo" width="820">

**开源的 AI 视频提示词 Skill —— 适配 Seedance、Sora、Kling、Veo 等**

*把一个粗糙想法变成模型可直接生成的文生视频提示词。让创作回归「表达」本身。*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Agent Skill](https://img.shields.io/badge/Agent-Skill-8A2BE2.svg)](#-安装)
[![Works with](https://img.shields.io/badge/works%20with-Claude%20·%20Codex%20·%20OpenClaw%20·%20Hermes-111.svg)](#-安装)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
![Bilingual](https://img.shields.io/badge/docs-EN%20%2B%20%E4%B8%AD%E6%96%87-orange.svg)

[**English**](README.md) · [**中文**](README.zh.md)

</div>

**Vibe Creating** 是一个开源、双语的**提示词工程 Skill**:把一个粗糙想法、故事、感觉或过度细化的分镜脚本,改写成干净、**模型友好的文生视频提示词**——并且会先判断你的输入是否适合这种风格。它遵循开放的 [Agent Skills 标准](https://agentskills.io)(单个 `SKILL.md`),因此可在 **Claude Code、Codex、OpenClaw、Hermes、Cursor** 等 agent 中运行,也可作为系统提示词用于任意 LLM。它适用于 **Seedance 2.0、Sora、Kling、Veo、Runway、Pika、海螺(Hailuo)** 等 AI 视频模型。

---

## ✨ 什么是 Vibe Creating？

随着文生视频模型越来越聪明,提示词反而越写越**简单**。与其逐帧规定焦段、镜头号和分镜脚本,不如专注**讲好故事**,**信任模型**自行找到合适的景别、光影和节奏。

**Vibe Creating** 就是这一范式——由字节跳动 / 火山引擎在 **Seedance 2.0** 模型发布时提出。本仓库把它的方法论沉淀为一个可复用的**AI 视频提示词 Skill**:

- 🎯 **讲好故事(Focus on Story)**——描述处境、空气的质感、情绪的流向,让模型去诠释。
- 🤝 **信任模型(Trust the Model)**——删掉低价值技术参数,保留并**转译**镜头*意图*。
- 🧭 **判断优先**——先判断你的输入是否适合这种风格再改写,绝不把你真正需要的精确分镜稿压平。

它**不是**一个「一律改短」的工具。完整理念见[创作理念文档](docs/philosophy.zh.md)。

## 🧠 工作原理

Skill 是**判断优先**的:在三个维度上给输入打分——**场景 × 表达 × 信息**——选出最贴合的最轻动作,并始终用同一套四段式格式回复。

```text
输入  (想法 · 场景 · 脚本)
  │
  ├─ 适合 Vibe Creating 吗? ──── 否 ────▶ 原样保留  (说明工作流不匹配)
  │     │ 是
  ├─ 信息够吗? (四层结构) ───── 否 ────▶ 先补问    (1–3 个短问题)
  │     │ 是
  └─ 原文已经多完善?
        ├─ 已经很强    ─▶ 直接放行
        ├─ 接近 / 凌乱 ─▶ 轻度提纯
        └─ 执行脚本    ─▶ 直接改写  (去技术参数,转译意图)
                               │
                               ▼
        四段式输出:  判断 · 执行动作 · 输出结果 · 补充说明
```

它检查的四层:**视觉锚点**(主体)、**行为 / 状态**(在发生什么)、**局部调性**(一个氛围词)、**视频主题**(应用场景 + 画面风格)。

而且每次回复都用同一套固定四段式:

> **判断**——是否适合 VC、原文是否已可用、信息是否充分
> **执行动作**——*直接放行 / 轻度提纯 / 直接改写 / 先补问 / 原样保留 / 可选 VC 版* 取其一
> **输出结果**——改写后的提示词、原样保留文本,或补问
> **补充说明**(如有)——本次删除了哪些技术控制、保留了哪些硬约束

**举个例子 ——**
**你:**「表达自由的感觉」
**Skill:** *判断:*适合 VC,但过于抽象、无法直接生成——缺少视觉锚点。*执行动作:***先补问**——「谁在自由?在哪里?旷野奔跑的孩子、潜水者、还是破晓的城市天台?想要什么风格——超写实、动画、还是水墨?」

## 📦 安装

Skill 就是一个可移植的 `SKILL.md` 文件夹,按你的环境选一种方式。

**方式 1 —— 一键安装(推荐)。** 自动识别你已装的 agent 并逐个复制:

```bash
npx github:Alisa0808/vibe-creating-skill
```

加 `--all` 给所有已知 agent 安装,显式指定(`… claude codex`),或用 `--dir <path>` 指向任意目录。

**方式 2 —— 克隆 + 复制。** 同一个文件,不同 agent 放在不同目录:

```bash
git clone https://github.com/Alisa0808/vibe-creating-skill.git
cp -r vibe-creating-skill/skills/vibe-creating-prompt <你的-agent-skills-目录>/
```

| Agent | skills 目录 |
|---|---|
| Claude Code | `~/.claude/skills/` |
| Codex CLI | `~/.codex/skills/` |
| OpenClaw | `~/.openclaw/skills/` |
| Hermes | `~/.hermes/skills/` |

**方式 3 —— 任意其他 LLM。** 把[技能文件](skills/vibe-creating-prompt/SKILL.zh.md)(或[英文版](skills/vibe-creating-prompt/SKILL.md))的正文粘贴为 GPT、Gemini、本地模型等的系统提示词 / 自定义指令。

然后重启 agent,直接描述你想拍什么——例如*「篮球少年最后一秒压哨三分绝杀」*。

## 🎬 实测对比

来自原始手册的真实测试案例——**同一个场景**,常规提示词 vs Vibe Creating 提示词,以及各自生成的视频(视频来自火山引擎 Seedance 2.0)。完整八个见[测试案例](docs/test-cases.md),更多提示词见[示例画廊](docs/examples/)。

### Case 2 · 接近 VC 的输入 → 轻度提纯

<table>
<tr><th width="50%">常规提示词</th><th width="50%">✅ Vibe Creating</th></tr>
<tr>
<td><video src="https://github.com/Alisa0808/vibe-creating-skill/raw/main/assets/cases/case2-regular.mp4" controls width="100%"></video></td>
<td><video src="https://github.com/Alisa0808/vibe-creating-skill/raw/main/assets/cases/case2-vibe.mp4" controls width="100%"></video></td>
</tr>
<tr>
<td><sub>一个人站在被海水淹没的地铁车厢里,窗外有鲸鱼游过,安静又窒息。</sub></td>
<td><sub>被海水淹没的地铁车厢里,一个人安静地站着,车厢内部半沉在幽蓝的水光中……一只巨大的鲸鱼缓慢地从车窗外游过,庞大的身影无声掠过玻璃,带来近乎梦境的压迫感。空气像被彻底抽空,既平静又让人无法呼吸。</sub></td>
</tr>
</table>

**对比备注 ——** 原输入已接近 Vibe Creating,两版效果整体相近;改写版在情绪收尾(震惊/敬畏)和水下音效设计上略胜,情绪弧度更完整。

### Case 3 · 执行型镜头稿 → 直接改写

<table>
<tr><th width="50%">常规提示词</th><th width="50%">✅ Vibe Creating</th></tr>
<tr>
<td><video src="https://github.com/Alisa0808/vibe-creating-skill/raw/main/assets/cases/case3-regular.mp4" controls width="100%"></video></td>
<td><video src="https://github.com/Alisa0808/vibe-creating-skill/raw/main/assets/cases/case3-vibe.mp4" controls width="100%"></video></td>
</tr>
<tr>
<td><sub>一份三镜头执行稿——景别(全景→全身→大特写)、运镜、时间码、音效、SSS 皮肤特效备注——讲一个穿肥大黄雨靴的小女孩在水坑前犹豫、最后跳进去。<i>(完整原文见<a href="docs/test-cases.md">测试案例</a>)</i></sub></td>
<td><sub>雨刚停,冷雾浮在老巷里,积水倒映着长满苔藓的旧墙。穿肥大黄雨靴的小女孩在最大的水坑前停下,在「想跳又不敢」之间犹豫——随后猛地并脚跳进去,水花在空中碎成明亮的光点,打盹的橘猫被惊得弹上矮墙,她抬头爆发出毫无保留的清脆笑声。</sub></td>
</tr>
</table>

**对比备注 ——** 原输入是高精度分镜执行稿,但底层是完整的情绪叙事。去掉技术参数后,画面核心(犹豫→跳水→大笑)完整保留,节奏反而更清晰——无需参数也能成片。

### Case 4 · 大量精准控制 → 改写并显式告知

<table>
<tr><th width="60%">✅ Vibe Creating 生成效果</th><th width="40%">发生了什么</th></tr>
<tr>
<td><video src="https://github.com/Alisa0808/vibe-creating-skill/raw/main/assets/cases/case4-vibe.mp4" controls width="100%"></video></td>
<td><sub>输入是塞满 21mm、f/11、1/250、EV+4、ISO 12800、HDR、冷蓝调色的电影级预演稿。Skill 把它改写成自然、有氛围的提示词——孤身女战士、洞顶倾泻的体积光、充满张力的半剪影——并<b>主动告知</b>已删除参数,如需要可提供保留参数的版本。</sub></td>
</tr>
</table>

## 🚫 什么时候不该用

Vibe Creating 适合氛围、情绪、叙事和视觉探索。对于**精确逐字对白同步、严格分镜执行、UI 演示或步骤教程**,传统精确提示词是更好的工具——Skill 会直接告诉你,而不是强行改写。

## ❓ 常见问题 FAQ

<details>
<summary><b>什么是 Vibe Creating？</b></summary>

Vibe Creating 是一种面向 AI 视频生成的提示词写法:与其逐帧堆砌镜头参数和分镜脚本,不如描述故事和感受,信任模型去诠释。本仓库把它封装成一个可复用的提示词 Skill,帮你把输入改写成模型友好的文生视频提示词。
</details>

<details>
<summary><b>怎么写出一条好的 AI 视频提示词？</b></summary>

覆盖四层(不必点名):**视觉锚点**(主体)、**行为或状态**(在发生什么)、**局部调性**(一个氛围词)、**视频主题**(应用场景 + 画面风格)。保留故事,删掉低价值技术参数。Skill 会替你做这件事,并补问缺失的那一层。
</details>

<details>
<summary><b>支持哪些视频模型？</b></summary>

任意文生视频模型——它源自 **Seedance 2.0**,同样的提示词在 **Sora、Kling、Veo、Runway、Pika、海螺(Hailuo)** 上也好用。输出是自然语言画面描述,不是某个模型的专用语法。
</details>

<details>
<summary><b>支持哪些 agent？</b></summary>

任何支持开放 Agent Skills(`SKILL.md`)标准的 agent——**Claude Code、Codex、OpenClaw、Hermes、Cursor** 等——或任意 LLM(把 skill 当系统提示词粘贴)。
</details>

<details>
<summary><b>和直接写一条更长更详细的提示词有什么区别？</b></summary>

Vibe Creating 不是「更长」或「更短」,而是「给对信息」。它去掉无效的技术噪声,保留故事、情绪和关键意象,让模型锁定你的意图。它还会拒绝改写那些真正需要精确控制的输入(对白同步、UI 演示),而不是把所有提示词强行套进一种风格。
</details>

<details>
<summary><b>这是字节跳动 / Seedance 官方项目吗？</b></summary>

不是。这是对一份公开方法论的独立、忠实的开源整理。见[署名与协议](#-署名与协议)和 [NOTICE](NOTICE) 文件。
</details>

## 🤝 参与贡献

欢迎补充翻译、新增画廊提示词、打磨细节——见[贡献指南](CONTRIBUTING.md)。

## 📄 署名与协议

**Vibe Creating** 范式、原始 Skill 草稿及示例提示词均来自**字节跳动 / 火山引擎**(基于 **Seedance 2.0** 创作)。本仓库是对该公开方法论的独立、忠实的英文/双语整理,并非官方产品。完整署名见 [NOTICE](NOTICE) 文件。

本仓库的代码与文档以 [MIT 协议](LICENSE)发布。底层范式及任何商标归原始所有者所有。
