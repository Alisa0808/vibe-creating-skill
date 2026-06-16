# Contributing

Thanks for helping improve the Vibe Creating Prompt Skill. Contributions of any size are welcome.

## Ways to contribute

- **Gallery prompts** — add a new example to `docs/examples/` in an existing category, or propose a new category.
- **Translations** — keep the English and Chinese editions in sync, or add a new language.
- **Skill refinements** — improve the decision framework, policies, or wording in the skill.
- **New test cases** — add worked cases to `docs/test-cases.md` that exercise an under-covered corner of the S × E × I framework.

## Repository conventions

- **Bilingual pairs stay in sync.** When you change `SKILL.md`, mirror it in `SKILL.zh.md` (and the same for `README` / `philosophy`). Keep the same section structure so the two read in parallel.
- **Keep `SKILL.md` lean.** Aim for ≤ 500 lines of body. Push long material into `docs/`. Follow Anthropic's SKILL.md guidance: a concise `description` answering *what* + *when* with reverse boundaries, and workflows written as checklists.
- **English for filenames and code**, kebab-case. Prose can be in either language in the appropriate file.

## Adding a gallery prompt

Each entry should:

1. Sit under a clear theme heading (`###`).
2. Lead with the **English Vibe prompt** in a blockquote — written in the Vibe Creating spirit (tell the story, minimal technical jargon, the four layers present without being labeled).
3. Include the **original / source language** in a `<details><summary>原文</summary> … </details>` block when available.

**Respect third-party rights:** do not paste copyrighted text (lyrics, novels, scripts). For literary moods, write *original paraphrases* — as the rest of the gallery does. See [NOTICE](NOTICE).

## Validating the skill

If you have the `skill-creator` tooling available, lint the frontmatter and structure:

```bash
python ~/.claude/skills/skill-creator/scripts/quick_validate.py skills/vibe-creating-prompt
```

Otherwise, sanity-check manually: the frontmatter has `name` (kebab-case) and a `description` answering *what* + *when* with reverse boundaries, and the body stays concise.

## Pull requests

- One focused change per PR.
- Update both language editions in the same PR when the change applies to both.
- Note in the PR description which files you touched and whether EN/ZH are in sync.
