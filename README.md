# Vibe Creating — AI Video Prompt Skill for Seedance, Sora, Kling & Veo

> Turn a rough idea into a model-ready text-to-video prompt. Let creation return to expression.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Claude Agent Skill](https://img.shields.io/badge/Claude-Agent%20Skill-8A2BE2.svg)](skills/vibe-creating-prompt/SKILL.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
![Bilingual EN + 中文](https://img.shields.io/badge/docs-EN%20%2B%20%E4%B8%AD%E6%96%87-orange.svg)

[English](README.md) · [中文](README.zh.md)

**Vibe Creating** is an open-source, bilingual **prompt-engineering skill** that rewrites a rough idea, story, feeling, or over-specified shot script into a clean, **model-friendly text-to-video prompt** — and first judges whether your input even suits this style. It works with AI video models like **Seedance 2.0, Sora, Kling, Veo, Runway, Pika, and Hailuo**, and ships as a **Claude Agent Skill** plus a paste-anywhere system prompt for any LLM.

Keywords: *AI video prompt · text-to-video prompt generator · prompt optimization · prompt rewriting · Seedance / Sora / Kling / Veo prompt guide · Claude Code skill · agent skill · generative AI video.*

---

## What is Vibe Creating?

As text-to-video models get smarter, prompting gets *simpler*. Instead of over-specifying focal lengths, shot numbers, and frame-by-frame scripts, you focus on **telling the story** and **trust the model** to find the right shots, light, and rhythm.

**Vibe Creating** is that paradigm — introduced by ByteDance / Volcano Engine alongside the **Seedance 2.0** video-generation model. This repo turns its methodology into a reusable **AI video prompt skill**:

- 🎯 **Focus on Story** — describe the situation, the texture of the air, the flow of emotion; let the model interpret.
- 🤝 **Trust the Model** — drop low-value technical parameters; keep and *translate* the shot *intent*.
- 🧭 **Judgment-first** — it decides whether your input even suits this style before rewriting, so it never flattens a precise shot list you actually wanted.

It is **not** a "make everything shorter" tool. See [docs/philosophy.md](docs/philosophy.md) for the full idea.

## The skill in one paragraph

Given a rough idea, a single scene, an emotional image, a multi-shot description, or an over-specified script, the skill: (1) judges fit using a **Scenario × Expression × Information** framework, (2) picks the lightest action — *pass-through, light cleanup, direct rewrite, ask first, keep as-is,* or *optional VC version* — and (3) returns a clean, generation-ready prompt while preserving any dialogue, voiceover, music, SFX, and hard constraints you specified.

## Use it

### As a Claude Agent Skill (Claude Code / Claude.ai / Agent SDK)

```bash
# Copy the skill into your personal skills directory
cp -r skills/vibe-creating-prompt ~/.claude/skills/
```

Restart Claude, then just describe what you want to film — e.g. *"a basketball kid hits a buzzer-beater three"* — and the skill triggers automatically. The Chinese edition is [`SKILL.zh.md`](skills/vibe-creating-prompt/SKILL.zh.md).

### Using it with other LLMs

The skill is a single self-contained Markdown file. To use the same logic outside Claude, paste the body of [`SKILL.md`](skills/vibe-creating-prompt/SKILL.md) (or [`SKILL.zh.md`](skills/vibe-creating-prompt/SKILL.zh.md)) as the system prompt / custom instructions in any LLM (GPT, Gemini, local models), then send your idea.

## What you get back

Every response uses a fixed four-part format:

> **Judgment** — does it suit VC, is it already usable, is the info enough
> **Action** — one of *pass-through / light cleanup / direct rewrite / ask first / keep as-is / optional VC version*
> **Result** — the rewritten prompt, the kept text, or a clarifying question
> **Notes** *(if any)* — what technical control was stripped, what constraints were kept

### Example

**You:** *Express the feeling of freedom.*
**Skill:** *Judgment:* suits VC, but too abstract to render — no visual anchor. *Action:* **ask first** — "Who is free, and where? A child in open fields, a diver, a city rooftop at dawn? Any style — photoreal, anime, ink-wash?"

See more in [docs/test-cases.md](docs/test-cases.md) and the [example gallery](docs/examples/).

## Repository layout

```
skills/vibe-creating-prompt/   # the Claude Agent Skill (SKILL.md + SKILL.zh.md)
docs/
  philosophy.md                # the manifesto (EN + ZH)
  examples/                    # the "inspiration magazine" prompt gallery
  test-cases.md                # 8 worked input → output cases
```

## When NOT to use it

Vibe Creating is for atmosphere, emotion, narrative, and visual exploration. For **precise word-for-word dialogue sync, strict shot-by-shot execution, UI demos, or step-by-step tutorials**, traditional precise prompting is the better tool — and the skill will tell you so rather than force a rewrite.

## FAQ

### What is Vibe Creating?
Vibe Creating is a prompt-writing paradigm for AI video generation: instead of over-specifying camera parameters and shot-by-shot scripts, you describe the story and feeling and trust the model to interpret it. This repo packages that approach as a reusable prompt skill that rewrites your input into a model-friendly text-to-video prompt.

### How do I write a good AI video prompt?
Cover four layers without naming them: a **visual anchor** (the main subject), an **action or state** (what's happening), a **local tonality** (one mood word), and a **video theme** (use case + visual style). Keep the story; drop low-value technical parameters. The skill does this for you and asks for whatever layer is missing.

### Which video models does this work with?
Any text-to-video model — it was distilled from **Seedance 2.0**, and the same prompts work well with **Sora, Kling, Veo, Runway, Pika, and Hailuo**. The output is plain natural-language description, not model-specific syntax.

### Can I use it without Claude?
Yes. It ships as a **Claude Agent Skill**, but the skill is a single self-contained Markdown file — paste [`SKILL.md`](skills/vibe-creating-prompt/SKILL.md) as the system prompt in any LLM (GPT, Gemini, local models).

### How is this different from just writing a longer, detailed prompt?
Vibe Creating is not "longer" or "shorter" — it's *the right information*. It removes ineffective technical noise and keeps the story, emotion, and key imagery, so the model locks onto your intent. It also refuses to rewrite inputs that genuinely need precise control (dialogue sync, UI demos), instead of forcing every prompt into one style.

### Is this an official ByteDance / Seedance project?
No. It's an independent, faithful open-source port of a publicly-shared methodology. See [Attribution & license](#attribution--license) and [NOTICE](NOTICE).

## Contributing

Translations, new gallery prompts, and refinements welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

## Attribution & license

The **Vibe Creating** paradigm, the original skill draft, and the example prompts originate from **ByteDance / Volcano Engine** (created with **Seedance 2.0**). This repository is an independent, faithful English/bilingual port of that publicly-shared methodology, not an official product. See [NOTICE](NOTICE) for full attribution.

Code and documentation in this repo are released under the [MIT License](LICENSE). The underlying paradigm and any trademarks remain with their original owners.
