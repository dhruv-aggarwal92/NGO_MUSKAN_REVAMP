MUSKAN NGO WEBSITE — VISUAL ENHANCEMENT BRIEF
Apply these changes to the existing Muskan website design across all 6 pages. Do not change typography, colour palette, content, or layout structure. Only enhance visuals, add motion, illustrations, and depth.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. HERO SECTION — HOME PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHOTO TREATMENT
- Add a full-bleed photo placeholder behind the stat on the right half of the hero. The photo (community session or girl's face) should sit inside a tall rounded rectangle frame — border-radius 160px at top, 120px at bottom — like a portrait capsule.
- Add a soft blush-pink colour overlay on the photo at 30% opacity so it blends with the page palette.
- Add two animated pulsing ring borders around the photo frame — one at 2px solid rgba(196,92,120,0.25), one at 1px solid rgba(196,92,120,0.12), both slightly larger than the frame. These rings slowly pulse in and out (scale 1 → 1.03 → 1, opacity 0.4 → 1 → 0.4, duration 3s infinite, second ring offset by 0.5s).
- Add a floating badge overlapping the bottom-left of the photo frame — white card, soft rose shadow, reading "Girls Reached" (small muted label) + "3,200+" (Cormorant Garamond, rose colour). Badge should gently float up and down (translateY 0 → -6px → 0, 4s ease-in-out infinite).

ILLUSTRATED CHARACTER
- Place a stylised illustrated girl beside or within the photo frame as a decorative element — dupatta or scarf flowing, holding a flower, in warm skin tones (#F5C4B3), rose kurta (#D4768F), sage lehenga (#B5C9B0). Style: bold flat illustration, no outlines, shapes only. She should feel joyful and dignified, not clipart.

BACKGROUND MOTION ELEMENTS (all animated, all subtle)
- 3 organic blob shapes in blush pink and sage green, different sizes (largest ~320px, medium ~200px, small ~140px), irregular border-radius (use CSS border-radius percentage values like 60% 40% 70% 30% / 50% 60% 40% 70%). Each blob slowly morphs its border-radius AND drifts position (translateX/Y ±10–15px). Duration: 8–12s each, infinite, ease-in-out, all at different offsets so they never sync. Opacity: 0.45–0.6. z-index behind text.
- Dot grid texture across the hero: background-image radial-gradient of 1px dots in rgba(212,118,143,0.18) on a 28px × 28px grid. This is static (no animation), just layered behind blobs.
- 3 botanical leaf SVGs (simple path — teardrop leaf with midrib line) scattered around the hero at 30–45° rotations. Colours: sage (#B5C9B0), blush-deep (#D4768F), blush-mid (#F0C4CF). Each leaf slowly rotates ±5° back and forth (3–5s, ease-in-out infinite). Opacity: 0.4–0.5.
- 1 eight-petal flower made of overlapping ellipses (rotated 0°/45°/90°/135°/180°/225°/270°/315°) in blush-deep with a cream centre circle. This slowly rotates 360° (duration 20s, linear, infinite). Opacity: 0.3. Position: top-right area of hero, partially behind text column.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. SECTION TRANSITIONS — ALL PAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remove all flat horizontal section dividers. Replace with overlapping section technique:
- Every section has border-radius: 40px 40px 0 0 on its top edge, overlapping the section above by 40px (margin-top: -40px, z-index stacked).
- This creates a layered, stacked card effect as the user scrolls — each section peels up over the previous one.
- The order of overlap on the home page: Hero (cream) → Programs (white, rounds up) → Impact (rose dark, rounds up) → Testimonials (cream mid, rounds up) → CTA (blush, rounds up) → Footer (dark).
- No wave SVGs, no diagonal cuts. The overlap IS the divider.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. BACKGROUND DECORATION — ALL SECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Apply consistently across every section on every page:

BLOBS (behind content, z-index 0)
- Every section gets 1–2 blobs in corner positions (top-left, bottom-right, etc.). Blobs are always: morphing border-radius animation + slow drift animation. Never static. Opacity 0.15–0.25 inside dark sections (impact), 0.4–0.6 inside light sections. Colours pulled from the section palette — blush blobs on cream sections, sage blobs on white sections, semi-transparent white blobs on rose-dark sections.

DOT TEXTURE
- Every section gets the dot-grid background: radial-gradient 1px dots, 28px spacing. Opacity varies: 0.15 on white/light sections, 0.08 on dark sections. Static, no animation.

BOTANICAL ELEMENTS
- Place 1 SVG botanical branch-and-leaf illustration per section, in a corner (alternating: bottom-left on odd sections, top-right on even sections). These are organic curved paths with 2–3 attached leaf shapes. Colour: sage or blush-deep at 20–25% opacity. Animate: very slow sway — rotate ±3° around the base of the branch, 5s ease-in-out infinite.
- Scatter 1–2 standalone leaf SVGs per section floating freely. These drift independently (translateX ±8px + translateY ±10px, 6–9s infinite, each at a different animation-delay so they are never in sync).

CONCENTRIC RING / PETAL MOTIF
- On alternating sections, place 1 decorative eight-petal rosette (same ellipse construction as hero). Size: 200–400px. Opacity: 0.04–0.07. Placed off-centre, partially clipped by section edge. Slow continuous rotation: 25–35s linear infinite. This acts as a large barely-visible watermark graphic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. SCROLL & INTERACTION ANIMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCROLL-TRIGGERED (trigger when element enters viewport at 40% threshold)
- All cards (program cards, testimonial cards, role cards, donation presets): fade up from translateY(24px) opacity(0) → translateY(0) opacity(1), staggered 0.1s per card, duration 0.5s ease.
- Section titles and eyebrows: same fadeUp, duration 0.6s.
- Impact numbers: count up from 0 to final value over 1.5s when section enters viewport. Easing: ease-out. Format exactly as designed (3,200+, 18K+, 42+, 6+).
- Timeline dots on About page: each dot and its card reveal one by one with a 0.2s stagger as user scrolls through the timeline.

HOVER
- Program cards, volunteer role cards, testimonial cards: translateY(-5px) + rotate(0.5deg) — a very slight editorial tilt. Duration 0.3s ease. No scale, no shadow explosion — keep it refined.
- Buttons: translateY(-2px), duration 0.2s. Primary button background darkens (rose → rose dark). Outline button fills with blush.
- Partner pills: translateY(-2px), border-color shifts to rose, duration 0.2s.
- Photo gallery images: blush-tinted overlay fades in (rgba(196,92,120,0.2)) + event name label slides up from bottom. Duration 0.3s ease.

PARALLAX
- Hero background blobs: move at 0.3× scroll speed relative to foreground (CSS transform translateY linked to scroll position via JS).
- Botanical leaf elements: move at 0.5× scroll speed — slightly faster than blobs but still behind text.
- Hero illustrated girl / photo frame: moves at 0.85× scroll speed — almost with the page but not quite, creating subtle depth.
- Section rosette watermarks: move at 0.2× scroll speed, barely perceptible but adds layering.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. ILLUSTRATED CHARACTERS — STYLE GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use these illustrations as graphic elements across the site — not as photos, not as icons. Each should feel like hand-made editorial artwork:

Style rules:
- Flat shapes, no outlines or strokes on character bodies
- Warm skin tones: #F5C4B3 (light) or #D4906A (deeper)
- Hair: #3D2020 (deep brown-black)
- Clothing in Muskan palette: rose kurta, sage lehenga/dupatta, blush accessories
- Flowers as recurring motif — girls holding or surrounded by blooms
- Expressions: joyful, dignified, strong — never sad or victimised
- Bindi as a detail on foreheads

Placement per page:
- Home hero: 1 girl in portrait frame (standing, holding flower)
- About page: 1 girl in founder section background (seated, reading)
- Periods page: 1 illustration of 2 girls talking / sharing — community scene
- Volunteer page: 1 illustration of a volunteer handing something to a girl
- Donate page: 1 small illustration of a girl with hands open, receiving

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. PHOTO FRAMING — FULL-BLEED TREATMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For every real photo used across the site:
- Frame shape: tall rounded rectangle (border-radius 160px top, 120px bottom — portrait capsule shape)
- Colour overlay: blush-pink at 20–30% opacity (mix-blend-mode: multiply) so photo integrates with palette
- Box shadow: 0 20px 60px rgba(139,58,82,0.18)
- No square crops. No circle crops. Always the capsule shape.
- Placement: always offset — never perfectly centred. Overlaps adjacent text or bleeds past section boundary.
- On mobile: photo stacks below text, maintains capsule shape, scales to 80% width.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PAGE-SPECIFIC ADDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ABOUT PAGE
- Founder section: large capsule-framed photo bleeds out of the section container at the top by 40px. Floating quote badge on photo — white card, italic Cormorant Garamond pull quote, rose left border.
- Timeline: animated reveal — each milestone dot fills with rose colour when it enters viewport, connected line draws from left to right using SVG stroke-dashoffset animation.
- Team cards: on hover, tilt +/- 0.5deg alternating (odd cards tilt right, even cards tilt left).

PERIODS PAGE
- Open with a full-bleed illustration banner (not a photo): the two-girls community scene illustration against a blush gradient background, spanning full width, height ~300px.
- Myth vs Fact cards: on page load, cards start face-down (rotateY 90deg) and flip into view as they enter viewport (rotateY 0deg, 0.4s ease, staggered).

GALLERY PAGE
- On load, all photos are desaturated (filter: grayscale(100%) saturate(0)). On hover, colour floods back (filter: grayscale(0%) saturate(1.2), duration 0.4s). This creates a dramatic reveal effect.
- Filter pills animate the grid: non-matching photos fade to 30% opacity and scale(0.95), matching photos remain full opacity. Transition 0.3s.

VOLUNTEER PAGE
- Role cards: each card has a small illustrated icon instead of a generic emoji — organic, matching the illustration style. On hover, the icon grows slightly (scale 1 → 1.1, 0.2s ease).

DONATE PAGE
- Preset amount pills: selecting one triggers a brief rose ripple animation (radial ripple from click point, rgba(196,92,120,0.3), expands and fades, 0.4s).
- Fund breakdown bar: animates from 0% width to final value when section enters viewport, duration 1.2s ease-out.
- Floating petals: 5–7 small petal shapes (simple ellipses, rotated) drift slowly downward across the donate section like confetti falling — translateY from -20px to +300px, x drifting ±20px, rotation 0–360deg, staggered timings 0–4s, duration 6–10s each, infinite. Opacity 0.15–0.25. Colour: blush-mid and sage.