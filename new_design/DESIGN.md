# Design System: The Monolithic Editorial

## 1. Overview & Creative North Star: "The Architectural Monolith"
This design system is a study in restrained power. Moving away from the "friendly" rounded corners and vibrant saturations of contemporary SaaS, we embrace **The Architectural Monolith**. This North Star focuses on the beauty of the void (whitespace), the authority of sharp geometry (0px radius), and the rhythm of high-contrast typography.

The experience should feel like an ultra-high-end physical monograph or an architectural blueprint. We break the "template" look by utilizing intentional asymmetry—where large typographic headlines are offset against expansive negative space—and by replacing structural lines with tonal shifts. It is noble, silent, and uncompromising.

---

## 2. Colors & Tonal Depth
The palette is rooted in the earth and the void. It moves from the deep `background` (#141312) to the tactile warmth of `Almond Cream` (#eae0d5).

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To define the transition from a header to a hero, or a hero to a content grid, designers must use background color shifts. Use `surface-container-low` for secondary sections and `surface` for the primary canvas. The eye should perceive a change in depth, not a physical barrier.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of heavy, matte cardstock. 
*   **Base:** `surface` (#141312)
*   **Raised Content:** `surface-container` (#211f1e)
*   **Focus Elements:** `surface-container-high` (#2b2a28)
*   **Deep Recess:** `surface-container-lowest` (#0f0e0d)

### The "Glass & Texture" Rule
To add soul to the dark mode, main CTAs should not be flat. Utilize subtle linear gradients from `primary` (#e3c7a9) to `primary-container` (#c6ac8f) at a 45-degree angle. For floating overlays (menus/modals), apply `surface-variant` with a 70% opacity and a `20px` backdrop-blur to create a "Smoked Obsidian" glass effect.

---

## 3. Typography: The Editorial Voice
We use **Inter** not as a utility font, but as a design element. 

*   **Display (lg/md):** Should be used sparingly, often set to `Extra Light (100-200)` or `Bold (700)` with tight letter-spacing (-0.02em) to create maximum contrast against the `body` text.
*   **Headline (lg/md):** The workhorse for storytelling. These must always have generous `margin-bottom` (at least 64px) to let the "noble" character of the font breathe.
*   **Body (lg/md):** Set in `Regular (400)` with increased line-height (1.6) for superior readability against the dark background.
*   **Labels:** Always uppercase with `+0.05em` letter spacing to mimic high-end fashion branding.

---

## 4. Elevation & Depth
In a system with 0px border-radius, traditional shadows can look "dirty." We use **Tonal Layering** to define hierarchy.

*   **The Layering Principle:** A "card" is simply a rectangle of `surface-container-low` sitting on a `surface` background. No shadow is required. The sharp edge provides all the definition needed.
*   **Ambient Shadows:** If a component must float (e.g., a dropdown), use a shadow tinted with `surface-tint` (#ddc2a4) at 5% opacity, with a blur of 40px. It should look like a soft glow, not a shadow.
*   **The "Ghost Border" Fallback:** If accessibility requires a container definition in low-contrast scenarios, use `outline-variant` at **10% opacity**. It should be barely perceptible—a whisper of an edge.

---

## 5. Components

### Buttons
*   **Primary:** Sharp 0px corners. Background: `primary` to `primary-container` gradient. Text: `on-primary` (Bold). 
*   **Secondary:** Sharp 0px corners. `Ghost Border` (20% opacity outline). Text: `primary`.
*   **Tertiary:** Text-only, uppercase labels with a 1px `on-surface` underline that expands on hover.

### Input Fields
*   **Styling:** No enclosing box. Only a bottom border (1px) using `outline-variant`. 
*   **States:** On focus, the bottom border transitions to `primary` (#e3c7a9) and the label shifts upward using `label-sm` tokens.

### Cards & Lists
*   **The Divider Ban:** Never use `horizontal-rule` elements. Separate list items with `16px` or `24px` of vertical whitespace. 
*   **Interaction:** On hover, a list item's background should shift to `surface-container-highest`.

### Signature Component: The "Monolith Image"
Images should never be full-width by default. They should be inset within the grid, featuring sharp 0px edges and a subtle `surface-container-lowest` inner-glow to give digital photography a "printed" depth.

---

## 6. Do’s and Don’ts

### Do
*   **Do** embrace extreme asymmetry. Align a headline to the far left and the body text to the far right of the grid.
*   **Do** use `Almond Cream` (#eae0d5) for primary reading text; pure white is too harsh for this "noble" palette.
*   **Do** ensure every element is aligned to a strict 12-column grid. Geometry is the only thing preventing minimalism from looking messy.

### Don't
*   **Don't** use border-radius. Even 1px is a violation of this system's DNA.
*   **Don't** use standard "Material" blue or "Bootstrap" primary colors. Stick strictly to the Stone Brown and Khaki Beige tones for accents.
*   **Don't** crowd the layout. If you feel like you need a divider line, you actually need more whitespace.