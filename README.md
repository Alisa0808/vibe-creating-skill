<div align="center">

# 🎬 Vibe Creating

**An open-source AI video-prompt skill — for Seedance, Sora, Kling, Veo & more**

*Turn a rough idea into a model-ready text-to-video prompt. Let creation return to expression.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Agent Skill](https://img.shields.io/badge/Agent-Skill-8A2BE2.svg)](#-install)
[![Works with](https://img.shields.io/badge/works%20with-Claude%20·%20Codex%20·%20OpenClaw%20·%20Hermes-111.svg)](#-install)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
![Bilingual](https://img.shields.io/badge/docs-EN%20%2B%20%E4%B8%AD%E6%96%87-orange.svg)

[**English**](README.md) · [**中文**](README.zh.md)

</div>

**Vibe Creating** is an open-source, bilingual **prompt-engineering skill** that rewrites a rough idea, story, feeling, or over-specified shot script into a clean, **model-friendly text-to-video prompt** — and first judges whether your input even suits this style. It follows the open [Agent Skills standard](https://agentskills.io) (a single `SKILL.md`), so it runs in **Claude Code, Codex, OpenClaw, Hermes, Cursor**, and any compatible agent — or as a system prompt in any LLM. It works with AI video models like **Seedance 2.0, Sora, Kling, Veo, Runway, Pika, and Hailuo**.

---

## ✨ What is Vibe Creating?

As text-to-video models get smarter, prompting gets *simpler*. Instead of over-specifying focal lengths, shot numbers, and frame-by-frame scripts, you focus on **telling the story** and **trust the model** to find the right shots, light, and rhythm.

**Vibe Creating** is that paradigm — introduced by ByteDance / Volcengine alongside the **Seedance 2.0** video-generation model. This repo turns its methodology into a reusable **AI video prompt skill**:

- 🎯 **Focus on Story** — describe the situation, the texture of the air, the flow of emotion; let the model interpret.
- 🤝 **Trust the Model** — drop low-value technical parameters; keep and *translate* the shot *intent*.
- 🧭 **Judgment-first** — it decides whether your input even suits this style before rewriting, so it never flattens a precise shot list you actually wanted.

It is **not** a "make everything shorter" tool. Read [the full philosophy](docs/philosophy.md) for the idea behind it.

## 🧠 How it works

The skill is *judgment-first*: it scores your input on three axes — **Scenario × Expression × Information** — picks the lightest action that fits, and always replies in the same four-part format.

```text
Input  (idea · scene · script)
  │
  ├─ Suits Vibe Creating? ───── no ─────▶ keep as-is  (explain the mismatch)
  │     │ yes
  ├─ Enough info? (4 layers) ── no ─────▶ ask first   (1–3 short questions)
  │     │ yes
  └─ How polished already?
        ├─ strong      ─▶ pass-through
        ├─ near / messy ─▶ light cleanup
        └─ execution    ─▶ direct rewrite  (strip params, translate intent)
                                │
                                ▼
        Four-part output:  Judgment · Action · Result · Notes
```

The four layers it checks for: **visual anchor** (the main subject), **action / state** (what's happening), **local tonality** (one mood word), and **video theme** (use case + visual style).

And every response comes back in that same fixed four-part format:

> **Judgment** — does it suit Vibe Creating, is it already usable, is the info enough
> **Action** — one of *pass-through / light cleanup / direct rewrite / ask first / keep as-is / optional VC version*
> **Result** — the rewritten prompt, the kept text, or a clarifying question
> **Notes** *(if any)* — what technical control was stripped, what constraints were kept

**For example —**
**You:** *Express the feeling of freedom.*
**Skill:** *Judgment:* suits VC, but too abstract to render — no visual anchor. *Action:* **ask first** — "Who is free, and where? A child in open fields, a diver, a city rooftop at dawn? Any style — photoreal, anime, ink-wash?"

## 📦 Install

The skill is one portable `SKILL.md` folder. Pick whichever option fits your setup.

**Option 1 — One-liner (recommended).** Auto-detects your installed agents and copies the skill into each:

```bash
npx github:Alisa0808/vibe-creating-skill
```

Add `--all` for every known agent, name agents explicitly (`… claude codex`), or target any folder with `--dir <path>`.

**Option 2 — Clone and copy.** Same file, different home per agent:

```bash
git clone https://github.com/Alisa0808/vibe-creating-skill.git
cp -r vibe-creating-skill/skills/vibe-creating-prompt <your-agent-skills-dir>/
```

| Agent | Skills directory |
|---|---|
| Claude Code | `~/.claude/skills/` |
| Codex CLI | `~/.codex/skills/` |
| OpenClaw | `~/.openclaw/skills/` |
| Hermes | `~/.hermes/skills/` |

**Option 3 — Any other LLM.** Paste the body of [the skill file](skills/vibe-creating-prompt/SKILL.md) (or [its Chinese edition](skills/vibe-creating-prompt/SKILL.zh.md)) as the system prompt / custom instructions in GPT, Gemini, a local model, etc.

Then restart your agent and describe what you want to film — e.g. *"a basketball kid hits a buzzer-beater three."*

## 🎨 Examples

One prompt per category — browse the [full example gallery](docs/examples/) for dozens more.

> **[Cinematic narrative](docs/examples/cinematic-narrative.md) · suppressed grief** — A funeral in pouring rain, everyone's black umbrellas merged into one mass. A little boy without an umbrella stands at the edge, rain soaking his shirt transparent; he crouches, floats a folded paper boat in a puddle, and watches a raindrop sink it.

> **[Light entertainment](docs/examples/light-entertainment.md) · evolution of the office worker** — Monday morning: a suited worker walks in and ages a little at every cubicle he passes — by his own seat he's white-haired. The screen reads "Monday 9:01." Photorealistic comedy.

> **[Knowledge & physics](docs/examples/knowledge-and-physics.md) · Tang-dynasty Chang'an** — Dusk on Suzaku Avenue; a camel caravan of foreign merchants passes through the gate, silks swaying, tavern banners gilded by the setting sun, returning birds on the pagoda eaves. Cinematic, warm tones.

> **[Surreal & dreamcore](docs/examples/surreal-dreamcore.md) · David, transmuted** — A fluorescent-green laser sweeps slowly down a white marble bust of David; where it passes, the matte marble becomes liquid mercury, and cyberpunk circuitry lights up and flows beneath the surface.

There are also eight worked [input → output test cases](docs/test-cases.md) showing exactly how the skill judges and rewrites.

## 🚫 When NOT to use it

Vibe Creating is for atmosphere, emotion, narrative, and visual exploration. For **precise word-for-word dialogue sync, strict shot-by-shot execution, UI demos, or step-by-step tutorials**, traditional precise prompting is the better tool — and the skill will tell you so rather than force a rewrite.

## ❓ FAQ

<details>
<summary><b>What is Vibe Creating?</b></summary>

Vibe Creating is a prompt-writing paradigm for AI video generation: instead of over-specifying camera parameters and shot-by-shot scripts, you describe the story and feeling and trust the model to interpret it. This repo packages that approach as a reusable prompt skill that rewrites your input into a model-friendly text-to-video prompt.
</details>

<details>
<summary><b>How do I write a good AI video prompt?</b></summary>

Cover four layers without naming them: a **visual anchor** (the main subject), an **action or state** (what's happening), a **local tonality** (one mood word), and a **video theme** (use case + visual style). Keep the story; drop low-value technical parameters. The skill does this for you and asks for whatever layer is missing.
</details>

<details>
<summary><b>Which video models does this work with?</b></summary>

Any text-to-video model — it was distilled from **Seedance 2.0**, and the same prompts work well with **Sora, Kling, Veo, Runway, Pika, and Hailuo**. The output is plain natural-language description, not model-specific syntax.
</details>

<details>
<summary><b>Which agents does this work with?</b></summary>

Any agent that supports the open Agent Skills (`SKILL.md`) standard — **Claude Code, Codex, OpenClaw, Hermes, Cursor**, and others — or any LLM at all, by pasting the skill as a system prompt.
</details>

<details>
<summary><b>How is this different from just writing a longer, detailed prompt?</b></summary>

Vibe Creating is not "longer" or "shorter" — it's *the right information*. It removes ineffective technical noise and keeps the story, emotion, and key imagery, so the model locks onto your intent. It also refuses to rewrite inputs that genuinely need precise control (dialogue sync, UI demos), instead of forcing every prompt into one style.
</details>

<details>
<summary><b>Is this an official ByteDance / Seedance project?</b></summary>

No. It's an independent, faithful open-source port of a publicly-shared methodology. See [Attribution & license](#-attribution--license) and the [NOTICE](NOTICE) file.
</details>

## 🤝 Contributing

Translations, new gallery prompts, and refinements welcome — see the [contributing guide](CONTRIBUTING.md).

## 📄 Attribution & license

The **Vibe Creating** paradigm, the original skill draft, and the example prompts originate from **ByteDance / Volcengine** (created with **Seedance 2.0**). This repository is an independent, faithful English/bilingual port of that publicly-shared methodology, not an official product. See the [NOTICE](NOTICE) file for full attribution.

Code and documentation in this repo are released under the [MIT License](LICENSE). The underlying paradigm and any trademarks remain with their original owners.
