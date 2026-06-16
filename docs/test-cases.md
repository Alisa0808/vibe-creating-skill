# Worked test cases

Eight cases that exercise the skill's decision framework. They double as **eval material**: feed the input, check the action label and output behavior match.

The framework crosses three axes — **Scenario (S)** × **Expression (E)** × **Information (I)** — so there are 3 × 3 × 2 = 18 base situations. These cases cover the important corners.

> Inputs/outputs translated from the original draft. The point of each case is the **action chosen**, not exact wording.

---

## Case 1 — Complete story, VC-native → pass-through

**Input:**
> A memory story. Part one: a little boy chases a plastic bag about to lift off the ground, in the yard of an old house. Part two: he stops, and sees his grandmother standing in the doorway calling him home. Part three: many years later, the grown-up him stands in the same yard; the wind is the same, but the yard is empty now. I want the feeling of a memory suddenly blown back by the wind.

**Judgment:** Suits VC; subject, structure, time relationship, core imagery (the wind), and emotional goal are all clear and already generation-ready.
**Action:** **pass-through.**
**Result:** keep the input as the prompt (optionally a one-touch clarity polish).
**Notes:** none needed. *Lesson: a strong VC input should not be rewritten — over-rewriting is a failure mode.*

---

## Case 2 — Single scene, near-VC → light cleanup

**Input:**
> A person stands in a subway car flooded with seawater; a whale swims past the window outside. Quiet and suffocating.

**Action:** **light cleanup.**
**Result:**
> In a subway car flooded by seawater, a person stands quietly, the car's interior half-submerged in dim blue water-light; handrails, seats, and windows are all steeped in a cold, damp silence. The world outside has become the deep sea — a giant whale glides slowly past the window, its vast silhouette passing the long glass without a sound, bringing a near-dreamlike pressure. The whole frame is so quiet you can only feel the presence of the water; the light sways, the air feels utterly drained — calm yet impossible to breathe in.

**Notes:** input was already near-VC, so both versions are close; the rewrite mainly sharpens the emotional close (awe) and implied underwater sound design.

---

## Case 3 — Execution-style shot script, but emotion underneath → direct rewrite

**Input (abridged):** a precise three-shot script with framing terms, dolly notes, timecodes, SFX cues, SSS-skin VFX notes — for a little girl in oversized yellow rain boots hesitating at a puddle, then jumping in.

**Judgment:** written as a high-precision shot list (E3), but the underlying scene is a complete emotional narrative in a VC-native scenario (S1).
**Action:** **direct rewrite** (VC-translatable).
**Result (abridged):**
> The rain has just stopped; cold mist still hangs in the old alley, puddles covering the flagstone road, mirroring the mottled, peeling, moss-grown walls on both sides. A pair of oversized bright-yellow rain boots walks slowly into frame; the little girl steps carefully to the largest puddle and stops, looking down at the swaying reflection… She stares at the puddle, glances at her boots, brows tight, lips pressed — wanting badly to jump but hesitating at the last second… Then she makes up her mind and jumps in with both feet; the water bursts open into bright points of light. A dozing ginger cat springs up in fright and leaps onto a higher wall. As the water settles, she lifts her head and breaks into a clear, unreserved laugh, eyes faintly wet — like a rain-washed world lit up by her own hand.

**Notes:** the core beats (hesitation → jump → laugh) and the cat detail are preserved; the focal lengths, movement params, and timecodes were removed because they were undeclared technical control. *Lesson: don't reject an execution script — translate it.*

---

## Case 4 — Heavy precision control → direct rewrite **with disclosure**

**Input (abridged):** a "cinematic pre-viz" packed with 21mm lens, dolly-in, Steadicam sway, rule-of-thirds, f/11, 1/250s shutter, EV+4, HDR, ISO 12800, desaturated cold-blue color grading — a lone woman warrior walking into a dark cave.

**Judgment:** VC-suited scene buried in undeclared precision control.
**Action:** **direct rewrite** (default: strip the technical control) **— and tell the user.**
**Result:** a natural, atmospheric rewrite focused on the lone figure, the volumetric shafts of light through the cave roof, the oppressive damp, and the tense half-silhouette of her heavy blade.
**Notes (required):** "I removed the lens/exposure/grading parameters and translated them into their visual results. If you'd like to keep specific parameters or the pre-viz structure, tell me and I'll give you a constraint-preserving version."

---

## Case 5 — Only an abstract word → ask first, then rewrite

**Input:**
> Express the feeling of freedom.

**Judgment:** information insufficient — no visual anchor, scene, or action. Don't write blind.
**Action:** **ask first** (then rewrite once direction is set).
**Result (after the user confirms a boy in open country):**
> Out in the open wilds, a boy runs on against the wind, grass waves rippling at his feet, vast land and sky unrolling into the distance. Sunlight and air land on him at once; his breath is ragged but exhilarated, hair and clothes lifted high by the wind, the whole of him surging forward as if he's finally broken free of something — the frame full of an open, weightless, un-constrainable freedom.

**Notes:** even without expansion the model can produce something, but the two blind versions diverged on subject (woman vs. boy) and style (youthful-pop vs. open-cinematic). Asking first lands the result closer to what the user pictured.

---

## Case 6 — Subject + action, but no style direction → ask first

**Input:**
> A basketball kid hits a last-second buzzer-beater three.

**Judgment:** clear subject and action, but missing style/viewing-mode direction.
**Action:** **ask first** (e.g. anime vs. photoreal? slow-mo on the release? crowd reaction?), then rewrite.

---

## Case 7 — Meets VC standard but messy / has typos → light edit

**Input (abridged):** a swordsman and a young woman stroll a lively street as a dragon-dance troupe passes noisily; he takes her to a quiet riverside full of sky lanterns; they talk; she shyly changes the subject — written with run-ons and a typo or two.

**Judgment:** already a valid VC-style emotional narrative; only the wording is messy.
**Action:** **light cleanup** (fix flow and typos; preserve all beats and the dialogue).

---

## Case 8 — Functional demo / UI tutorial → keep as-is, no VC

**Input (abridged):**
> Make a 35–45s app demo of the "create task" feature, tutorial-style, no atmospheric expression — the point is clear steps. Open on the full home screen for 2s so the bottom nav is visible; tap the + button bottom-right; enter title "Submit first draft Friday" and body "finish the budget page, sync with design and ops"; tap the date picker, pick this Friday; tap save; return to the list and clearly show the new task at the top. Keep the button taps, page transitions, input contents, dwell times, and highlight cues — like a real product tutorial script, not an emotional film.

**Judgment:** low VC fit — the goal is a precise functional tutorial, not creative translation.
**Action:** **keep as-is** (suggest splitting into clear steps if useful).
**Notes:** explain that VC isn't recommended here; the explicit step/cue requirements are exactly what a tutorial needs and should be kept.
