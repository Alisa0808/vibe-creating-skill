# Portable system prompt

The Vibe Creating logic, re-expressed as a standalone **system prompt** for any LLM — no skill runtime required. Use it when you're not on Claude Code / the Agent SDK (where the [skill](../skills/vibe-creating-prompt/) is the better fit).

- [`system-prompt.en.md`](system-prompt.en.md) — English
- [`system-prompt.zh.md`](system-prompt.zh.md) — 中文

## How to use

Paste the file's contents as the **system prompt** (or "custom instructions" / "developer message"), then send the user's rough idea as the first user message.

### OpenAI / Anthropic API (Python sketch)

```python
system = open("prompts/system-prompt.en.md").read()

# OpenAI
client.chat.completions.create(
    model="gpt-5.1",
    messages=[
        {"role": "system", "content": system},
        {"role": "user", "content": "express the feeling of freedom"},
    ],
)

# Anthropic
client.messages.create(
    model="claude-opus-4-8",
    system=system,
    messages=[{"role": "user", "content": "express the feeling of freedom"}],
)
```

### Chat UIs

- **ChatGPT** → *Settings → Personalization → Custom instructions*, or start a Project / Custom GPT and paste it as the instructions.
- **Gemini** → use a *Gem* and paste it as the instructions.
- **Claude.ai** → create a *Project* and paste it into the project's custom instructions.
- **Local models (Ollama, LM Studio, etc.)** → set it as the system message.

## What you get back

Every reply follows a fixed four-part format:

> **Judgment** · **Action** · **Result** · **Notes (if any)**

where **Action** is exactly one of: *pass-through / light cleanup / direct rewrite / ask first / keep as-is / optional VC version*.

See [`../docs/test-cases.md`](../docs/test-cases.md) for worked input → output examples.
