---
name: vibe-creating-prompt
description: Judges whether a user's input suits the Vibe Creating style of video-prompt writing, and when it does, distills single-scene prompts, multi-shot descriptions, emotional imagery, or mixed input into prompts that are easier for a video model to generate from — while preserving any user-specified dialogue, voiceover, music, sound effects, and other hard constraints. Use when a user wants to turn an idea, story, feeling, or rough/over-specified prompt into a strong text-to-video prompt (Seedance, Sora, Kling, Veo, Runway, etc.), or asks to "rewrite", "improve", "clean up", or "vibe-ify" a video prompt. Do NOT use for long narrative films that need precise word-for-word dialogue sync, industrial shot lists meant to be executed verbatim, or functional/UI demos and step-by-step tutorials.
license: MIT
---

# Vibe Creating Prompt Skill

## Overview

Vibe Creating distills what the user *actually wants to express* so the model can lock onto the visual center, the emotional direction, and the continuity of the experience. It amplifies creative intent, emotional value, key imagery, and visual coherence; it down-weights low-value technical parameters and mechanical execution language.

This skill is a *judgment-first* rewriter. It does not blindly shorten or "vibe-ify" everything. It first asks whether the input even belongs in the Vibe Creating lane, then chooses the lightest action that serves the user's intent.

## Quick Start

When you receive an input, run three steps:

1. **Judge whether it suits Vibe Creating (VC).** Is this a scene best expressed through story, emotion, memory, atmosphere, imagery, or experience flow — rather than precise execution?
2. **Decide the most appropriate handling right now.** Pass it through, lightly clean it up, rewrite it directly, ask a clarifying question first, keep it as-is, or offer an *optional* VC version.
3. **Only ask for what's missing.** Request the minimum information needed to complete the chosen action. Never interrogate the user just to satisfy your own classification.

Do not expose internal labels (`S1`, `E2`, "Mode 5", etc.) to the user. Judge internally; communicate plainly.

## Decision Framework — Scenario × Expression × Information

Decide along three axes. First **Scenario (S)** — does the underlying creative goal suit VC. Then **Expression (E)** — what form is the user's text already in, which sets *how much* to touch. **Information density (I)** runs in parallel as a stability check: whenever a must-have is missing, ask first, then route.

### Scenario fit (S)

- **S1 — VC-native.** Story, emotion, memory, atmosphere, imagery, experience flow. VC clearly helps.
- **S2 — Partially VC-suited.** Brand/product/character showcases, stylized ads. VC may help, but is optional.
- **S3 — Low VC fit.** UI demos, tutorials, step-by-step instructions, strict dialogue-synced long-form. The goal or workflow doesn't match VC.

### Expression form (E)

- **E1 — Close to VC already.** Reads like a vivid scene/story.
- **E2 — Mixed.** Creative content interleaved with execution language.
- **E3 — Precision-control writing.** Shot numbers, focal lengths, movement parameters, timecodes.

### Routing matrix (default action per cell)

| | **E1 — close to VC** | **E2 — mixed** | **E3 — precision control** |
|---|---|---|---|
| **S1 — VC-native** | Direct rewrite; if already polished → light cleanup or pass-through | Light cleanup, then rewrite — keep valid structure, order, emotional build | Treat as *VC-translatable*; strip low-value technical control, convert to natural visual description. Don't reject just because it's written as an execution script |
| **S2 — partial** | Light cleanup; if already usable → pass-through | Offer an *optional* VC version; let the user choose | Keep the original intent; gently note a VC rewrite is available on request |
| **S3 — low fit** | Stay close to the original; keep as-is if needed | Keep as-is or do very limited cleanup; only stylize on explicit request | Keep as-is; explain this fits a traditional shot-list workflow better than VC |

### Four hard routing rules

- **Missing info wins.** However well a scenario fits, if the visual anchor, main action, or style direction is missing, ask before writing.
- **User hard constraints win.** If the user explicitly asks to keep dialogue, music, shot numbers, parameters, paragraph structure, or a delivery format, do not delete them. A VC version is an *extra* version, or offered only after the user agrees.
- **Multi-shot keeps its structure.** When the user is already expressing one unified experience across shot paragraphs, don't flatten it into a single block of prose — but don't default to numbered output either unless they asked for numbers or lists.
- **Precision-control writing ≠ low-fit scenario.** Look at the *goal* first, then decide whether to translate. An execution-style script can still describe a deeply VC-suited scene.

### Information-density check (I)

Even a VC-perfect scenario can't be force-rewritten when a key element is missing. Ask first when: there's no clear visual anchor; only an abstract feeling with no subject/object/scene; a subject but no action or state; fragments with no main relationship or style direction; an ultra-short input that has a subject and event but no clear style/viewing-mode/key moment; or multi-shot content with jumps you can't see a reason for.

A strong VC prompt prioritizes these **four layers**. Fill whichever is missing first — don't mechanically demand all four:

1. **Visual anchor** — the thing that most deserves to be seen (a person / object / named concept / the VFX subject itself).
2. **Action or state** — what's happening (one action, state, or beat — just one).
3. **Local tonality** — how this moment *feels* (one mood word or adjective: backlit warm amber, slight handheld sway…).
4. **Video theme** — where the clip is used + its visual style.
   - *Use case:* concept short, micro-narrative, film pre-viz, emotional piece, knowledge/physics restoration, VFX fragment…
   - *Visual style:* photorealistic, cinematic, animation, claymation, Eastern ink-wash, cyberpunk, illustrated…

Asking principle: the density check is not a separate gate — it runs alongside S and E. Ask for the minimum needed to land the chosen action, usually in one round. For ultra-short, abstract, single-image inputs, prioritize turning the abstract word into the visible information a frame needs; if the direction is already mostly clear, give a first pass and ask about only the most critical 1–3 gaps.

## Interaction Policy

Internally complete the three judgments (**S / E / I**) — preliminary judgments are fine when info is short. Then choose an **action**:

> **pass-through · light cleanup · direct rewrite · ask first · keep as-is · optional VC version**

Handling principles:

- VC-suited but missing info → ask for the minimum needed for the current action.
- **When the input already has a clear subject, structure, time relationship, core imagery, and a clear emotional goal — and the text is already strongly generation-ready — default to pass-through.** Only do light cleanup if clarity needs a nudge; don't proactively rewrite.
- VC-suited but containing undeclared precision controls → you may down-weight, delete, or translate them by default; if you did, you **must** say so and tell the user they can ask to keep specific ones.
- Partially-suited scenarios → don't push VC; preserve the original or offer an optional VC version.
- Low-fit scenarios → explain it's a goal/workflow mismatch, not a rejection of the user's idea.
- User-specified dialogue, voiceover, music, SFX, structure, and parameters always take priority.

## Camera Language Policy

Camera language should not be deleted wholesale. What to remove is the low-value "tell the system how to shoot" technical parameters. What to preserve or translate is the "how should the viewer feel" intent.

**Demote or delete by default:**

- Focal lengths / mm numbers
- Camera-position jargon
- Movement parameters (speed multipliers, exact dolly distances)
- Shot numbers
- Depth of field, aperture, exposure, shutter
- Equipment notes, A/B cam, coverage
- Pure editing instructions

Translate intent instead of dropping it — e.g. "slow dolly-in" → "the gaze slowly closes in, building a sense of pressure."

**When the user explicitly asks to keep parameters:** obey the constraint first, then decide whether to *additionally* offer a VC version.

**When it's undeclared whether to keep precision control:**

- Don't treat technical control as a must-keep item.
- Default to the more generation-friendly VC creative version.
- Preserve whatever contributes to emotion, narrative, or viewing experience.
- For purely technical camera control, delete it or translate it into a natural result.
- Don't interrupt to confirm first — but if you weakened, deleted, or translated technical control, **say so briefly** in the output. If the user wants certain parameters/structure/rhythm beats kept, they can say so and you provide a constraint-preserving version.

## Sound & Constraint Priority

Dialogue, voiceover, music, SFX, lyrics, narration, and other explicitly specified sound content rank **above** creative optimization. You may reorder them, but you must **not** reword them, replace them, or delete a user's explicit sound requirement.

When rules conflict, resolve in this order:

1. **User-explicit content & hard constraints** — dialogue, VO, music, SFX, shot structure, parameter-keep requests, format requirements, style limits.
2. **Creative optimization** — distill story, emotion, memory, imagery, and a unified experience *without* breaking constraints.
3. **VC paradigm consistency** — only after the first two are satisfied, tighten the language further for model readability.

Supplementary rules:

- Dialogue/VO/music/SFX the user wrote out → keep verbatim.
- Visual and sound requirements written together → you may reorder, but never alter the sound content itself.
- If the visuals suit VC but the sound doesn't → rewrite only the visual part.
- If the whole thing only stands up with long, strict, word-level dialogue sync → default to *not* doing a VC rewrite.

## Rewrite Modes

VC rewriting is not one template. Pick the mode by the input's dominant factor:

- **Narrative** — for story-, relationship-, or event-driven input. Output one continuous prompt, or keep 2–5 scene segments. Preserve event order and emotional turns.
- **Emotional** — for atmosphere-, feeling-, or state-driven input. Concentrate on environment, rhythm, texture, and viewing experience. Don't force a causal chain just to "look like a story."
- **Memory** — for recollection, flashback, faded-time, vanishing, or rediscovered fragments. Keep the blur, the washed-out quality, the fragility; amplify recurring imagery and the sense of time slipping.
- **Stream-of-consciousness** — for association, fragments, subjective perception, non-linear expression. Incompleteness is allowed, but the frame must stay perceivable, with internal coherence across images.
- **Multi-shot experience** — for multi-segment, multi-scene, multi-cut input that serves one shared experience. Break by natural segments (or by number only if the user asked). 1–3 sentences each; keep scene flow, emotional progression, and visual motifs; drop low-value execution terms.
- **Mixed purification** — for creative content tangled with execution language. Keep the original structure and valid information; remove only technical noise, repetition, and low-value control. Don't over-rewrite or invent new beats.

## Output Rules

The goal is to help the user **express more accurately** — not to rewrite their work into a different film.

### Length & form

- Don't make the output meaningfully longer than the input; don't balloon an ultra-short input into long prose.
- Add nothing without basis — never invent new character relationships, plot twists, scene details, or emotional changes.
- For single-segment output, tighten to one directly usable prompt.
- **Structure ≠ numbering.** Shot numbers / list formatting in the *input* do not by themselves mean "keep the numbering." Only keep numbered output when the user explicitly asks to keep shot numbers, segment numbers, list format, or a delivery structure; otherwise present multi-segment content as natural paragraphs.
- With enough info and no extra constraints, a single shot/segment is usually **~30–120 words**; loosen this to preserve structure, dialogue, or multi-segment progression.
- When the user explicitly asks to keep the original structure, preserve structure over brevity.

### User-visible format

- Never expose internal labels like `S1 + E2` or `Mode 5`.
- Default to a **four-part output**, fixed order: **Judgment / Action / Result / Notes (if any)**.
  - **Judgment** — briefly: does it suit VC, is the original already usable, is the info sufficient.
  - **Action** — explicitly use one label: **pass-through / light cleanup / direct rewrite / ask first / keep as-is / optional VC version**.
  - **Result** — the actual rewrite, the kept-as-is text, or the clarifying question(s).
  - **Notes (if any)** — what technical control you weakened/deleted/translated; which hard constraints (dialogue, VO, music, SFX) you preserved; or a hint that parameters/structure/rhythm can be kept on request.
- Keep output natural, concise, and fitted to the user's original task context.
- Omit the fourth part when there's nothing to note.

## Quick Reference

| Input type | Judge first | Ask what's missing | Default action | Output style |
|---|---|---|---|---|
| Single scene with clear subject, action, mood | Likely suits VC; check if already focused enough | Only if style, visual center, or main state is missing | Direct rewrite, light cleanup, or pass-through | One ready-to-generate prompt |
| Multi-shot narrative serving one unified experience | Suits VC; check the emotion / theme / memory line is coherent | If shot-to-shot relationship or progression is unclear | Rewrite keeping structure; group if needed | Segmented, or keep original structure |
| Heavy shot numbers/params, but underlying emotion/story scene | VC-translatable; don't reject for execution style | If the main experience/action/relationship is unclear | De-noise and translate, keep narrative & emotional intent | Strip params, convert to natural visual description |
| Brand showcase, character showcase, stylized ad | Partial VC fit; rewrite not mandatory | If the emotional goal or style direction is unclear | Light cleanup or optional VC version | Keep intent; offer a more experiential version if useful |
| Only abstract words ("freedom", "premium", "powerful") | Insufficient info; don't force a rewrite | Visual anchor, scene, action, or state | Ask first; don't rewrite blind | Pose 1–3 short questions |
| Visuals already include dialogue / VO / music / SFX | Partially VC; sound content has priority | Only if the visual part is under-specified | Keep sound content; rewrite visuals only | Note "sound kept unchanged" up front |
| User explicitly wants shot numbers / params / delivery structure kept | Constraints win; don't delete | Usually no need to ask | Keep as-is, or add an optional VC version | Note "kept as the execution draft" |
| Functional demo, UI tutorial, step instructions | Low fit; the goal isn't creative translation | Usually no VC questions | Keep as-is; suggest splitting if useful | Explain VC isn't recommended |
| Long-form story requiring exact dialogue sync | Low fit; capability/workflow boundary | Usually no VC questions | No VC rewrite; suggest splitting visual segments | Explain pure-visual parts can be split out |
| Mixed-language creative input with some jargon | If the underlying experience is clear, still suits VC | Only if subject, relationship, or style is unclear | Translate jargon, keep core vibe | Output a natural visual description in the target language |
