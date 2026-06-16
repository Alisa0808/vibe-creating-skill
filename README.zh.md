# Vibe Creating 提示词 Skill

> 让创作回归「表达」本身。**Vibe Creating** 文生视频提示词 Skill 的开源英文/双语版——封装为 Claude Agent Skill，以及可用于任意 LLM 的可移植系统提示词。

[English](README.md) · [中文](README.zh.md) · MIT 协议

---

## 什么是 Vibe Creating？

随着文生视频模型越来越聪明，提示词反而越写越**简单**。与其逐帧规定焦段、镜头号和分镜脚本，不如专注**讲好故事**，**信任模型**自行找到合适的景别、光影和节奏。

**Vibe Creating** 就是这一范式——由字节跳动 / 火山引擎在 **Seedance 2.0** 模型发布时提出。本仓库把它的方法论沉淀为一个可复用的**提示词 Skill**：

- 🎯 **讲好故事（Focus on Story）**——描述处境、空气的质感、情绪的流向，让模型去诠释。
- 🤝 **信任模型（Trust the Model）**——删掉低价值技术参数，保留并**转译**镜头*意图*。
- 🧭 **判断优先**——先判断输入是否适合这种风格，再决定是否改写，绝不把你真正需要的精确分镜稿压平。

它**不是**一个「一律改短」的工具。完整理念见 [docs/philosophy.zh.md](docs/philosophy.zh.md)。

## 一句话讲清这个 Skill

面对一个粗糙想法、单幕场景、情绪化画面、多镜头描述或过度细化的脚本，Skill 会：(1) 用 **场景 × 表达 × 信息** 框架判断适配度；(2) 选择最轻的动作——*直接放行、轻度提纯、直接改写、先补问、原样保留、可选 VC 版*；(3) 返回一条干净、可直接生成的提示词，同时保留你指定的台词、旁白、音乐、音效和硬约束。

## 怎么用

### 作为 Claude Agent Skill（Claude Code / Claude.ai / Agent SDK）

```bash
# 把 skill 复制到个人 skills 目录
cp -r skills/vibe-creating-prompt ~/.claude/skills/
```

重启 Claude，然后直接描述你想拍什么——例如*「篮球少年最后一秒压哨三分绝杀」*——Skill 会自动触发。英文版为 [`SKILL.md`](skills/vibe-creating-prompt/SKILL.md)。

### 作为可移植系统提示词（GPT、Gemini、本地模型……）

把 [`prompts/system-prompt.zh.md`](prompts/system-prompt.zh.md)（或 [`.en.md`](prompts/system-prompt.en.md)）粘贴为系统提示词 / 自定义指令，然后发送你的想法。配置细节见 [`prompts/README.md`](prompts/README.md)。

## 你会得到什么

每次回复都采用固定四段式：

> **判断**——是否适合 VC、原文是否已可用、信息是否充分
> **执行动作**——*直接放行 / 轻度提纯 / 直接改写 / 先补问 / 原样保留 / 可选 VC 版* 取其一
> **输出结果**——改写后的提示词、原样保留文本，或补问
> **补充说明**（如有）——本次删除了哪些技术控制、保留了哪些硬约束

### 示例

**你：**「表达自由的感觉」
**Skill：***判断：*适合 VC，但过于抽象、无法直接生成——缺少视觉锚点。*执行动作：***先补问**——「谁在自由？在哪里？旷野奔跑的孩子、潜水者、还是破晓的城市天台？想要什么风格——超写实、动画、还是水墨？」

更多见 [docs/test-cases.md](docs/test-cases.md) 和[示例画廊](docs/examples/)。

## 仓库结构

```
skills/vibe-creating-prompt/   # Claude Agent Skill（SKILL.md + SKILL.zh.md）
prompts/                       # 可移植、模型无关的系统提示词（EN + ZH）
docs/
  philosophy.zh.md             # 创作理念（EN + ZH）
  examples/                    # 「灵感杂志」提示词画廊
  test-cases.md                # 8 个 输入 → 输出 案例
```

## 什么时候不该用

Vibe Creating 适合氛围、情绪、叙事和视觉探索。对于**精确逐字对白同步、严格分镜执行、UI 演示或步骤教程**，传统精确提示词是更好的工具——Skill 会直接告诉你，而不是强行改写。

## 参与贡献

欢迎补充翻译、新增画廊提示词、打磨细节——见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 署名与协议

**Vibe Creating** 范式、原始 Skill 草稿及示例提示词均来自**字节跳动 / 火山引擎**（基于 **Seedance 2.0** 创作）。本仓库是对该公开方法论的独立、忠实的英文/双语整理，并非官方产品。完整署名见 [NOTICE](NOTICE)。

本仓库的代码与文档以 [MIT 协议](LICENSE)发布。底层范式及任何商标归原始所有者所有。
