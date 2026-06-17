# Worked test cases

Eight cases that exercise the skill's decision framework. They double as **eval material**: feed the input, check the action label and output behavior match.

The framework crosses three axes — **Scenario (S)** × **Expression (E)** × **Information (I)** — so there are 3 × 3 × 2 = 18 base situations. These cases cover the important corners.

> These cases come from ByteDance / Volcengine's [Prompt Skill draft (original, in Chinese)](https://bytedance.larkoffice.com/docx/AVJddCKUmoj6j7x08jbcRBzon8b). English is translated from the original draft; the complete Chinese original is kept in each `<details>原文</details>` block. Every case quotes its **full input and output** (transcribed from the source, including the cases the handbook showed as interaction screenshots). The one exception is Case 6, whose response in the source is a screenshot of a clarifying question rather than a final rewrite, so it lists the input and the action taken.

---

## Case 1 — Complete story, VC-native → pass-through

**Input:**
> A memory story. Part one: a little boy chases a plastic bag about to lift off the ground, in the yard of an old house. Part two: he stops, and sees his grandmother standing in the doorway calling him home. Part three: many years later, the grown-up him stands in the same yard; the wind is the same, but the yard is empty now. I want the feeling of a memory suddenly blown back by the wind.

<details><summary>原文（输入）</summary>

> 一个回忆故事，第一段，小男孩在旧房子的院子里追一只快飞起来的塑料袋；第二段，他停下来，看见奶奶站在门口叫他回家；第三段，很多年后，成年后的他站在同一个院子里，风还是一样，但院子已经空了。我想要一种回忆突然被风吹回来的感觉。

</details>

**Judgment:** Suits VC; subject, structure, time relationship, core imagery (the wind), and emotional goal are all clear and already generation-ready.
**Action:** **pass-through.**
**Result:** keep the input as the prompt (optionally a one-touch clarity polish).
**Notes:** none needed. *Lesson: a strong VC input should not be rewritten — over-rewriting is a failure mode.*

---

## Case 2 — Single scene, near-VC → light cleanup

**Input:**
> A person stands in a subway car flooded with seawater; a whale swims past the window outside. Quiet and suffocating.

<details><summary>原文（输入）</summary>

> 一个人站在被海水淹没的地铁车厢里，窗外有鲸鱼游过，安静又窒息。

</details>

**Action:** **light cleanup.**
**Result:**
> In a subway car flooded by seawater, a person stands quietly, the car's interior half-submerged in dim blue water-light; handrails, seats, and windows are all steeped in a cold, damp silence. The world outside has become the deep sea — a giant whale glides slowly past the window, its vast silhouette passing the long glass without a sound, bringing a near-dreamlike pressure. The whole frame is so quiet you can only feel the presence of the water; the light sways, the air feels utterly drained — calm yet impossible to breathe in.

<details><summary>原文（改写输出）</summary>

> 被海水淹没的地铁车厢里，一个人安静地站着，车厢内部半沉在幽蓝的水光中，扶手、座椅和车窗都浸透着冰冷潮湿的寂静。外面的世界像已经变成深海，一只巨大的鲸鱼缓慢地从车窗外游过，庞大的身影无声掠过狭长的玻璃，带来一种近乎梦境的压迫感。整个画面安静得只能感觉到水的存在，光线摇晃，空气像被彻底抽空，既平静又让人无法呼吸。

</details>

**Notes:** input was already near-VC, so both versions are close; the rewrite mainly sharpens the emotional close (awe) and implied underwater sound design.

---

## Case 3 — Execution-style shot script, but emotion underneath → direct rewrite

**Input:**
> **Shot 1 — a damp memory, setup (00:00–00:03) | 3s.** Framing: wide shot → full shot. Camera: static frame. Image: the heavy rain has just stopped; cold-toned mist fills the air. The flagstone road is covered in puddles, mirroring the mottled, peeling, moss-grown old walls on both sides. At the edge of frame, a pair of bright-yellow rubber rain boots, far too big for the feet inside them, slowly steps into view. The little girl, wearing the yellow boots, walks carefully to the edge of the largest puddle and stops, looking down at the huge reflection in the water. SFX: the damp, empty wind after rain; the monotonous drip off the roof tiles; the faint "squeak" of rain boots on wet flagstones.
> **Shot 2 — the standoff before the key action (00:03–00:08) | 5s (the emphasis).** Framing: extreme close-up → close-up. Camera: an extremely slow push-in (a slow, breathing feel), focusing on her face and eyes. Image: the camera fixes on the girl's cheek. Her brows are tightly knit, her gaze darting between the huge puddle and the oversized yellow boots on her feet. She bites her lower lip; from sheer tension and anticipation, her nose wrinkles slightly. She takes a deep breath, her whole face showing an intensely vivid inner standoff of "I want to jump… but I don't dare." The shot is drawn out very slowly, as if time has frozen. SFX: all wind suddenly thins out (a vacuum feel), leaving only the very clear, slightly rapid breathing and the faint sound of her tongue on her lip. At the end of second 8, a heavy, suppressed heartbeat boom cuts in. VFX notes: extremely fine facial texture (SSS skin material); dynamic micro-capillary response under the skin; the catch of the puddle's reflected light in her eyes; dynamic simulation of raindrops dripping down her hair.
> **Shot 3 — the burst and its afterglow, reaction (00:08–00:15) | 7s.** Framing: low-angle wide shot → static medium shot. Camera: at the instant the action bursts, the camera snaps back to a fixed focus. Image: (end of second 8) the heartbeat sounds, the girl instantly drops all hesitation, her eyes turning resolute. She suddenly jumps at the puddle with both feet together. Shot in high-speed, the water bursts into countless crystal-clear, diamond-like droplets. In the background, a dozing ginger cat is startled awake by the violent splash, fur on end, scrambling onto a higher wall in an utterly graceless leap. The frame returns to a medium shot: the girl stands on the puddle-strewn flagstones, lifts her head, and her face bursts into an intensely brilliant, pure, crisp laugh, eyes wet. SFX: a violent, bass-heavy splash (slow-motion splash sound design); the cat's scramble and hiss; the girl's crisp, unreserved laughter (clear child laughter). VFX notes: realistic heavy fluid dynamics (volumetric fluid simulation for splash); slow-motion physics of droplets in the air; the color saturation lifts slightly at the moment her laughter bursts at the end (color grading shift to warmer/more saturated).

<details><summary>原文（输入）</summary>

> 镜头一：湿润的记忆 setup (00:00 - 00:03) | 时长：3秒 景别：全景 (Wide Shot) → 全身 (Full Shot) 运镜：静态定焦 (Static Frame)。画面：大雨刚停，空气中弥漫着冷色调的雾气。石板路上布满积水，积水倒映着两侧斑驳、掉漆、长满苔藓的老墙。画面边缘，一双相对于脚来说过于肥大的明黄色乳胶雨靴缓缓步入画面。小女孩穿着明黄色雨靴，小心翼翼地走到最大的水坑边缘停住，低头凝视着那片巨大的积水倒影。音效：雨后潮湿、空旷的风声；屋檐瓦片滴水的单调声音；雨靴踩在湿石板上轻微的"唧唧"声。
> 镜头二：关键动作前的博弈 (Hesitation CU) (00:03 - 00:08) | 时长：5秒（着重表现部分）景别：大特写 (Extreme Close-Up) → 特写 (Close-Up) 运镜：镜头极缓慢地推进（缓慢呼吸感），聚焦她的脸和眼睛。画面：镜头对准小女孩的脸颊。她紧锁双眉，目光在巨大的水坑和脚下那双肥大的明黄色雨靴之间快速游移。她微微咬着下唇，因为过度紧张和期待，鼻子微微皱起。她深深吸了一口气，整张脸呈现出一种极度生动的"我要跳……但不敢"的内部博弈。这个镜头拉得很慢，仿佛时间凝固。音效：所有的风声瞬间变淡（真空感），只剩下极其清晰的、有些急促的呼吸声和小女孩舌头舔舐下唇的轻微声响。第8秒末，突然切入一声沉重的、压抑后的心跳轰鸣（心脏鼓动声）。特效备注：极其精细的脸部纹理渲染（SSS皮肤材质）；皮肤下的微血管动态反应；眼球对积水反射光芒的捕捉；雨珠沿头发滴落的动态模拟。
> 镜头三：瞬间的爆发与余韵 reaction (00:08 - 00:15) | 时长：7秒 景别：低角度全景 (Low Angle Wide Shot) → 静态中景 (Static Medium Shot) 运镜：动作爆发刹那，镜头瞬间拉远定焦。画面：(第8秒末) 心跳声响起，小女孩瞬间收起所有的犹豫，眼神变得坚定。她猛地双脚并拢跳向水坑。由于采用高速摄影，积水在空气中炸裂成无数晶莹剔透、如碎钻般的水珠。画面背景中，一只原本打盹的橘猫被猛烈的哗啦声惊醒，毛发竖立，以一个极其狼狈的动作蹦上了更高的矮墙。画面随即转回中景，小女孩正站在满地残水的石板路上，抬头，脸上瞬间爆发出一阵极其灿烂、纯粹、清脆的笑声，眼眶湿润。音效：猛烈的、重低音处理的撞击溅水声（Slow motion splash sound design）；猫咪 Scramble 嘶嘶声；女孩清脆、毫无保留的笑声（Clear child laughter）。特效备注：真实的厚重流体动力学模拟 (Volumetric fluid simulation for splash)；水珠在空气中的慢动作物理模拟；画面色彩饱和度在结尾笑声爆发瞬间轻微提升 (Color grading shift to warmer/more saturated)。

</details>

**Judgment:** written as a high-precision shot list (E3), but the underlying scene is a complete emotional narrative in a VC-native scenario (S1).
**Action:** **direct rewrite** (VC-translatable).
**Result:**
> The rain has just stopped; cold mist still floats in the old alley, puddles covering the flagstone road, mirroring the mottled, peeling, moss-grown walls on both sides. A pair of oversized bright-yellow rain boots walks slowly into frame; the little girl steps carefully to the largest puddle and stops, looking down at the swaying reflection. In the air there's only the damp, empty wind after rain, the intermittent dripping from the eaves, and the small sound her boots make on the wet flagstones. She stares at the puddle, then glances down at her boots, brows knit tight, lips pressed — as if waging a solemn, childlike contest with herself. She clearly wants badly to jump, yet hesitates at the very last moment, her breathing turning clear and quick, everything around her seeming suddenly drained away, leaving only that tension and anticipation of "about to leap — but one small step short of courage." The next second she makes up her mind and jumps in with both feet; the water bursts open with a roar, great splashes shattering into bright points of light in the air. A dozing ginger cat beside her springs up in fright and scrambles onto a higher wall. As the water settles, the little girl stands on the puddle-strewn flagstones and lifts her head, her face breaking into an unreserved, clear and brilliant laugh, eyes faintly wet — like the moment a rain-washed world is finally lit up by her own hand.

<details><summary>原文（改写输出）</summary>

> 雨刚停，冷冷的雾气还浮在老巷里，石板路上布满积水，倒映着两侧斑驳掉漆、长满苔藓的旧墙。一双过于肥大的明黄色雨靴慢慢走进画面，小女孩小心翼翼地来到最大的水坑前停下，低头望着那片晃动的倒影。空气里只有雨后潮湿空旷的风声、屋檐断续滴水的声音，和雨靴踩过湿石板时轻轻发出的细小声响。
> 她盯着水坑，又低头看自己的雨靴，眉头紧紧皱着，嘴唇微微抿住，像在和自己做一场郑重又幼小的较量。她明明已经很想跳下去，却还是在最后一刻犹豫，呼吸变得清晰而急促，周围的一切像忽然被抽空，只剩下她那种"马上就要冲出去、却还差一点点勇气"的紧张和期待。
> 下一秒，她忽然下定决心，整个人猛地并脚跳进水坑，积水轰然炸开，大片水花在空中碎成明亮的光点。旁边一只原本打盹的橘猫被惊得猛然弹起，仓皇跃上更高的矮墙。水声落下之后，小女孩站在满地残水的石板路上抬起头，脸上爆发出毫无保留、清脆灿烂的笑，眼眶微微湿润，像一个雨后世界终于被她亲手点亮的瞬间。

</details>

**Notes:** the core beats (hesitation → jump → laugh) and the cat detail are preserved; the focal lengths, movement params, and timecodes were removed because they were undeclared technical control. *Lesson: don't reject an execution script — translate it.*

---

## Case 4 — Heavy precision control → direct rewrite **with disclosure**

**Input:**
> Cinematic pre-viz shot, hyperrealist cinematic feel. Shot with a 21mm wide-angle prime cine lens and a large-format digital sensor, presenting a continuous, slow, tension-building dolly-in with a slight, natural Steadicam handheld sway. The frame follows the rule of thirds; a lone woman warrior enters alone from the left foreground, stepping cautiously toward the depths of a dark, deep cave. Dramatically high-contrast volumetric light (the Tyndall effect) pours down through a narrow crack in the dark cave roof; the camera is set to f/11 for deep depth of field, paired with a fast 1/250s shutter to sharpen and freeze the thick suspended dust particles in the air. The strong light source creates extreme backlight (exposure compensation EV+4), pressing the warrior's layered combat gear and the heavy great-blade on her back into a tense half-silhouette. The surroundings are damp, deep, and oppressive; HDR capture with ISO 12800 brings natural low-light noise and film grain, perfectly rendering the rough, wet rock-wall texture and faint specular highlights in the deep shadows. The whole uses a desaturated dark color grading, leaning into cold-blue tones and crushed blacks, perfectly simulating a high-stakes film pre-viz fragment at the moment before danger strikes.

<details><summary>原文（输入）</summary>

> 电影级预演（Pre-viz）镜头，超写实主义电影感。使用 21mm 广角定焦电影镜头和大画幅数字传感器拍摄，呈现连续缓慢、营造紧张氛围的摄影机向前推拉（Dolly-in）运动，并带有轻微自然的斯坦尼康手持摇晃感。画面遵循三分法构图，一名女战士孤身一人从左侧前景入画，步伐谨慎地走向黑暗幽深的洞穴深处。极具戏剧性的高对比度体积光（丁达尔效应）穿透黑暗洞顶的狭窄裂口倾泻而下，相机设置光圈 f/11 以控制大景深，配合 1/250 秒的高速快门锐化并定格空气中浓厚的悬浮尘埃颗粒。强光源设定造成极端的强逆光（曝光补偿 EV+4），将女战士多层战斗装备和背负的重型巨刃压成极具张力的半剪影。四周环境潮湿、幽深且充满压迫感，HDR 高动态范围捕捉配合 ISO 12800 带来的自然低光噪点与胶片颗粒感，完美展现出深邃阴影中粗糙湿润的岩壁纹理与微弱的镜面高光。整体采用降低饱和度的暗调色彩分级（Color Grading），偏重冷蓝调和压抑的黑场（Crushing blacks），完美模拟危险降临前一触即发的高危影视预演片段。

</details>

**Judgment:** suits a rewrite. On the surface it's dense pre-viz / camera-execution language — focal length, sensor, aperture, shutter, exposure compensation, ISO, HDR, grading — but its real core is a shot brief for the crew, shaping one unified, strong, perceivable viewing experience (a lone woman warrior entering a deep cave, danger closing in, mounting pressure). Subject, action, environment, mood, and style direction are all complete; info is sufficient, no need to ask.
**Action:** **direct rewrite** (default: strip the technical control) **— and tell the user.**
**Result:**
> A hyperrealist cinematic pre-viz shot. In the cold-blue depths of a cave, a lone woman warrior steps slowly from the left foreground into the darkness, a heavy great-blade on her back, her steps cautious and alert. The camera presses forward in a slow, oppressive wide angle with a slight, natural following sway. Through a narrow crack in the cave roof, dramatic volumetric light pours down, piercing the deep gloom — drifting dust clearly visible in the beams. The strong backlight crushes her into a tense half-silhouette, leaving only the cold, hard outline of her combat gear and blade. The rock walls around her are wet and rough, faint reflections flickering in the deep shadows; the whole frame is high-contrast, low-saturation, with heavy blacks — oppressive, deathly still, danger about to break, full of high-stakes epic atmosphere.

<details><summary>原文（改写输出）</summary>

> 超写实主义电影级预演镜头，冷蓝调的洞穴深处，一名女战士孤身从左侧前景缓慢步入黑暗，背负重型巨刃，步伐谨慎而警觉。摄影机以压迫感十足的广角视角持续缓慢向前逼近，带着轻微自然的跟随晃动。洞顶狭窄裂口中倾泻下极具戏剧性的体积光，刺穿深邃幽暗，尘埃浮尘在光束中清晰可见。强烈逆光将她压成充满张力的半剪影，只留下战斗装备与巨刃边缘冷硬锋利的轮廓。四周岩壁湿润粗粝，深邃阴影中偶尔闪出微弱反光，整体画面高对比、低饱和、黑场沉重，压迫、肃杀、危险一触即发，充满高危史诗感。

</details>

**Notes (required):** "This version weakened some of the pure technical parameters in your original. If you'd like, I can also give you two more versions: (1) a parameter-preserving version that keeps 21mm, f/11, 1/250, EV+4, ISO 12800, HDR, Color Grading, etc.; (2) a Seedance condensed version — shorter and more direct, ready to feed straight into the model."

---

## Case 5 — Only an abstract word → ask first, then rewrite

**Input:**
> Express the feeling of freedom.

<details><summary>原文（输入）</summary>

> 表达自由的感觉

</details>

**Judgment:** information insufficient — no visual anchor, scene, or action. Don't write blind.
**Action:** **ask first** (then rewrite once direction is set).
**Result (after the user confirms a boy in open country):**
> Out in the open wilds, a boy runs on against the wind, grass waves rippling at his feet, vast land and sky unrolling into the distance. Sunlight and air land on him at once; his breath is ragged but exhilarated, hair and clothes lifted high by the wind, the whole of him surging forward as if he's finally broken free of something — the frame full of an open, weightless, un-constrainable freedom.

<details><summary>原文（改写输出）</summary>

> 旷野之中，一个男孩迎着风不断奔跑，草浪在脚边起伏，广阔天地向远处铺开，阳光和空气同时落在他身上，呼吸急促却畅快，头发和衣角被风高高掀起，整个人像终于挣脱了什么一样向前冲去，画面充满开阔、轻盈、无法被束缚的自由感。

</details>

**Notes:** even without expansion the model can produce something, but the two blind versions diverged on subject (woman vs. boy) and style (youthful-pop vs. open-cinematic). Asking first lands the result closer to what the user pictured.

---

## Case 6 — Subject + action, but no style direction → ask first

**Input:**
> A basketball kid hits a last-second buzzer-beater three.

<details><summary>原文（输入）</summary>

> 篮球少年最后一秒压哨三分球绝杀

</details>

**Judgment:** clear subject and action, but missing style/viewing-mode direction.
**Action:** **ask first** (e.g. anime vs. photoreal? slow-mo on the release? crowd reaction?), then rewrite.

---

## Case 7 — Meets VC standard but messy / has typos → light edit

**Input:**
> A swordsman and a young woman stroll down a lively street; a dragon-dance troupe passes noisily beside them. The swordsman turns to her and says, there are too many people here, let me take you somewhere. The girl nods with a smile, her eyes expectant. Cut to an empty shot — a quiet riverside, the sky full of sky lanterns; the swordsman runs into frame pulling the girl along. The girl smiles and says to him, it's beautiful here. The swordsman says, when I was little, my parents always brought me here for walks; this is the first time I've brought someone else. The girl is taken aback, lowers her head a little shyly, and changes the subject: let's float sky lanterns. *(the original is written with run-ons and a typo — 有写 for 有些.)*

<details><summary>原文（输入）</summary>

> 大侠和少女在热闹街道上漫步，舞龙的队伍从她们身边吵吵嚷嚷地经过，大侠转头对少女说，这里人太多了，我带你去一个地方。少女含笑点头，目光期待。接一个空镜，幽静的河边，天空中都是孔明灯，大侠拉着少女跑着入境。少女笑着对大侠说，这里真美。大侠说，小时候，我爹娘总带我来这里散步，这是我第一次带别人来。少女一愣，有写害羞地低头，转移话题说，我们放孔明灯吧。

</details>

**Judgment:** suits a rewrite — a multi-shot micro-narrative whose scene progression, character relationship, dialogue, and emotional shift are already fairly full; the original is already quite generation-ready, info is sufficient.
**Action:** **light cleanup** — tidy phrasing only, don't proactively rewrite the wording; preserve the existing structure, dialogue, and relationship progression.
**Result:**
> A swordsman and a young woman stroll down a lively street; a dragon-dance troupe passes noisily beside them. The swordsman turns to her: "There are too many people here — let me take you somewhere." The girl nods with a smile, eyes expectant. Cut to an empty shot: a quiet riverside, the sky full of sky lanterns; the swordsman runs into frame pulling the girl along. Smiling, she says, "It's beautiful here." He says, "When I was little, my parents always brought me here for walks — this is the first time I've brought someone else." The girl is taken aback, lowers her head a little shyly, and changes the subject: "Let's float the sky lanterns."

<details><summary>原文（改写输出）</summary>

> 大侠和少女在热闹街道上漫步，舞龙的队伍从他们身边吵吵嚷嚷地经过。大侠转头对少女说：「这里人太多了，我带你去一个地方。」少女含笑点头，目光期待。接一个空镜，幽静的河边，天空中满是孔明灯，大侠拉着少女奔跑入画。少女笑着对大侠说：「这里真美。」大侠说：「小时候，我爹娘总带我来这里散步，这是我第一次带别人来。」少女一愣，有些害羞地低下头，转移话题说：「我们放孔明灯吧。」

</details>

**Notes:** the original already has clear subject, action, structure, and dialogue anchors, so this pass only tidied phrasing and fixed the typo (有写 → 有些; also 她们 → 他们, 跑着入境 → 奔跑入画). All beats and dialogue preserved.

---

## Case 8 — Functional demo / UI tutorial → keep as-is, no VC

**Input:**
> Make a 35–45s app demo of the "create task" feature, tutorial-style, no atmospheric expression — the point is clear steps. Open on the full home screen for 2s so the bottom nav is visible; tap the + button bottom-right; enter title "Submit first draft Friday" and body "finish the budget page, sync with design and ops"; tap the date picker, pick this Friday; tap save; return to the list and clearly show the new task at the top. Keep the button taps, page transitions, input contents, dwell times, and highlight cues — like a real product tutorial script, not an emotional film.

<details><summary>原文（输入）</summary>

> 做一个 35 到 45 秒的 app 新建任务功能演示视频，偏教程向，不需要氛围化表达，重点是步骤清楚。开头先展示首页完整界面 2 秒，让用户看清底部导航；然后点击右下角加号按钮，进入新建页；标题输入"周五提交方案初稿"，内容输入"补齐预算页、给设计和运营同步"；接着点击日期选择器，选本周五；再点保存按钮；最后回到列表页，能明显看到新建成功的这条任务出现在最上方。请保留按钮点击、页面跳转、输入框内容、停留时长和高亮引导这些说明，最好像真实产品教程脚本，不要写成情绪片。

</details>

**Judgment:** low VC fit — the goal is a precise functional tutorial, not creative translation.
**Action:** **keep as-is** (suggest splitting into clear steps if useful).
**Notes:** explain that VC isn't recommended here; the explicit step/cue requirements are exactly what a tutorial needs and should be kept.
