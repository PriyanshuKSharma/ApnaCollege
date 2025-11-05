# CSS

## What is CSS?

**CSS** (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls the layout, colors, fonts, and overall visual appearance of web pages.

CSS is the **styling foundation** of web development and works alongside HTML to create visually appealing websites.

---

## 1. Introduction to CSS and Styling
### CSS (Cascading Style Sheets)
*   **Definition**: CSS is a stylesheet language that describes how HTML elements should be displayed. It separates content from presentation.
*   **Cascade**: The "cascading" nature means styles can be inherited and overridden based on specificity and source order.
*   **Syntax**: CSS uses selectors to target HTML elements and declarations to define styles:
    *   **Selector**: Targets HTML elements (`h1`, `.class`, `#id`)
    *   **Property**: The style attribute to change (`color`, `font-size`)
    *   **Value**: The setting for the property (`red`, `16px`)
    *   **Declaration**: Property-value pair (`color: red;`)

### CSS Integration Methods
*   **Inline CSS**: Styles applied directly to HTML elements using the `style` attribute.
```html
<p style="color: red; font-size: 18px;">This is inline CSS</p>
```

*   **Internal CSS**: Styles defined within `<style>` tags in the HTML document head.
```html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
```

*   **External CSS**: Styles defined in separate `.css` files and linked to HTML documents.
```html
<!-- HTML file -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
```css
/* styles.css */
p {
    color: green;
    font-size: 14px;
}
```

*   **Import**: Using `@import` to include external stylesheets within CSS files.
```css
@import url('typography.css');
@import url('layout.css');
```

### CSS vs. HTML vs. JavaScript
*   **HTML** provides the structure and content of web pages.
*   **CSS** handles the styling, layout, and visual presentation.
*   **JavaScript** adds interactivity and dynamic behavior.

---
## 2. CSS Selectors and Specificity

CSS selectors are patterns used to select and style HTML elements.

*   **Element Selectors**: Target HTML elements by tag name.
```css
h1 {
    color: blue;
    font-size: 2em;
}

p {
    line-height: 1.6;
    margin-bottom: 1em;
}

div {
    border: 1px solid #ccc;
}
```

*   **Class Selectors**: Target elements with specific class attributes.
```html
<p class="highlight">This paragraph has a class</p>
<div class="nav-item">Navigation item</div>
```
```css
.highlight {
    background-color: yellow;
    padding: 10px;
}

.nav-item {
    display: inline-block;
    margin-right: 20px;
}
```

*   **ID Selectors**: Target elements with specific ID attributes.
```html
<header id="main-header">Site Header</header>
<div id="sidebar">Sidebar content</div>
```
```css
#main-header {
    background-color: #333;
    color: white;
    padding: 20px;
}

#sidebar {
    width: 300px;
    float: right;
}
```
*   **Attribute Selectors**: Target elements based on attributes.
```html
<input type="text" placeholder="Enter name">
<input type="email" placeholder="Enter email">
<a href="https://example.com">External link</a>
<a href="/internal-page">Internal link</a>
```
```css
/* Select text inputs */
[type="text"] {
    border: 2px solid blue;
}

/* Select external links */
[href^="https"] {
    color: green;
}

/* Select elements with placeholder attribute */
[placeholder] {
    font-style: italic;
}
```

*   **Pseudo-class Selectors**: Target elements in specific states.
```css
/* Hover effect */
a:hover {
    color: red;
    text-decoration: underline;
}

/* Focus state for form inputs */
input:focus {
    outline: 2px solid blue;
    background-color: #f0f8ff;
}

/* Select every 2nd child */
li:nth-child(2n) {
    background-color: #f5f5f5;
}

/* First and last child */
p:first-child {
    margin-top: 0;
}

p:last-child {
    margin-bottom: 0;
}
```

*   **Pseudo-element Selectors**: Target specific parts of elements.
```css
/* Add content before/after elements */
.quote::before {
    content: '"';
    font-size: 1.2em;
    color: #666;
}

.quote::after {
    content: '"';
    font-size: 1.2em;
    color: #666;
}

/* Style first line of paragraphs */
p::first-line {
    font-weight: bold;
    color: #333;
}

/* Style first letter */
p::first-letter {
    font-size: 2em;
    float: left;
    margin-right: 5px;
}
```

### Combinator Selectors
```html
<div class="container">
    <h1>Main Title</h1>
    <p>First paragraph</p>
    <div>
        <p>Nested paragraph</p>
    </div>
    <p>Second paragraph</p>
</div>
```
```css
/* Descendant: selects ALL p inside .container */
.container p {
    color: blue;
}

/* Child: selects only DIRECT p children of .container */
.container > p {
    font-weight: bold;
}

/* Adjacent Sibling: selects p immediately after h1 */
h1 + p {
    margin-top: 0;
    font-size: 1.1em;
}

/* General Sibling: selects all p siblings after h1 */
h1 ~ p {
    margin-left: 20px;
}
```

### CSS Specificity
Specificity determines which styles are applied when multiple rules target the same element.

| Selector Type | Specificity Value | Example |
| :------------ | :---------------- | :------ |
| Inline styles | 1000 | `style="color: red;"` |
| IDs | 100 | `#header` |
| Classes, attributes, pseudo-classes | 10 | `.nav`, `[type="text"]`, `:hover` |
| Elements and pseudo-elements | 1 | `div`, `::before` |
| Universal selector | 0 | `*` |

---

## 3. CSS Properties and Values

CSS properties define what aspect of an element to style, and values specify how to style it.

### Text and Font Properties
```css
/* Text styling examples */
.heading {
    color: #2c3e50;              /* Dark blue-gray */
    font-family: 'Arial', sans-serif;
    font-size: 2.5rem;           /* Responsive font size */
    font-weight: 700;            /* Bold */
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.2;
}

.paragraph {
    color: rgb(51, 51, 51);      /* Dark gray */
    font-family: 'Georgia', serif;
    font-size: 1.1em;
    font-style: normal;
    text-align: justify;
    line-height: 1.6;
    word-spacing: 1px;
}

.link {
    color: hsl(210, 100%, 50%);  /* Blue using HSL */
    text-decoration: underline;
}

.link:hover {
    text-decoration: none;
    color: #e74c3c;
}

.strikethrough {
    text-decoration: line-through;
}

.capitalize {
    text-transform: capitalize;   /* First Letter Of Each Word */
}
```

### Background Properties
```css
/* Simple background color */
.header {
    background-color: #3498db;
}

/* Background image with properties */
.hero-section {
    background-image: url('hero-bg.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
}

/* Gradient backgrounds */
.gradient-bg {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

.radial-gradient {
    background: radial-gradient(circle, #ff9a9e, #fecfef);
}

/* Multiple backgrounds */
.complex-bg {
    background: 
        url('pattern.png') repeat,
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('main-bg.jpg') center/cover no-repeat;
}

/* Background shorthand */
.shorthand-bg {
    background: #f0f0f0 url('bg.png') no-repeat center/contain;
}
```

### Border Properties
```css
/* Basic borders */
.card {
    border: 2px solid #ddd;
    border-radius: 8px;
}

/* Individual border sides */
.custom-border {
    border-top: 3px solid #e74c3c;
    border-right: 1px dashed #3498db;
    border-bottom: 2px dotted #2ecc71;
    border-left: 4px double #f39c12;
}

/* Rounded corners */
.rounded {
    border-radius: 50%;          /* Perfect circle */
}

.rounded-corners {
    border-radius: 10px 20px 30px 40px; /* top-left, top-right, bottom-right, bottom-left */
}

/* Border styles */
.border-styles {
    border-width: 3px;
    border-style: solid;         /* solid, dashed, dotted, double, groove, ridge, inset, outset */
    border-color: #333;
}

/* No border */
.no-border {
    border: none;
}

/* Transparent border (useful for hover effects) */
.hover-border {
    border: 2px solid transparent;
    transition: border-color 0.3s;
}

.hover-border:hover {
    border-color: #3498db;
}
```

### Spacing Properties
```css
/* Margin examples */
.centered-block {
    width: 300px;
    margin: 0 auto;              /* Center horizontally */
}

.spaced-element {
    margin: 20px;                /* All sides */
    margin: 10px 20px;           /* Vertical | Horizontal */
    margin: 10px 15px 20px;      /* Top | Horizontal | Bottom */
    margin: 10px 15px 20px 25px; /* Top | Right | Bottom | Left */
}

.individual-margins {
    margin-top: 10px;
    margin-right: 15px;
    margin-bottom: 20px;
    margin-left: 25px;
}

/* Padding examples */
.padded-content {
    padding: 20px;               /* All sides */
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
}

.custom-padding {
    padding: 10px 20px 30px 40px; /* Top | Right | Bottom | Left */
}

.button {
    padding: 12px 24px;          /* Vertical | Horizontal */
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
}
```

### Dimension Properties
```css
/* Width and height examples */
.fixed-size {
    width: 300px;
    height: 200px;
    background-color: #e9ecef;
}

.responsive-width {
    width: 100%;                 /* Full width of parent */
    max-width: 800px;            /* But not more than 800px */
    margin: 0 auto;              /* Center it */
}

.flexible-height {
    min-height: 400px;           /* At least 400px tall */
    height: auto;                /* Grow with content */
}

.viewport-dimensions {
    width: 100vw;                /* Full viewport width */
    height: 100vh;               /* Full viewport height */
}

.content-based {
    width: max-content;          /* Width based on content */
    height: fit-content;         /* Height based on content */
}

/* Responsive container */
.container {
    width: 90%;
    max-width: 1200px;
    min-width: 320px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Aspect ratio box */
.aspect-ratio-box {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;      /* 16:9 aspect ratio */
    position: relative;
}
```

---

## 4. CSS Layout and Positioning

### Display Properties
```css
/* Block elements (default for div, p, h1, etc.) */
.block-element {
    display: block;
    width: 100%;
    background-color: #e3f2fd;
    padding: 10px;
    margin-bottom: 10px;
}

/* Inline elements (default for span, a, strong, etc.) */
.inline-element {
    display: inline;
    background-color: #fff3e0;
    padding: 5px;
}

/* Inline-block combines both behaviors */
.inline-block-element {
    display: inline-block;
    width: 150px;
    height: 100px;
    background-color: #f3e5f5;
    margin: 10px;
    text-align: center;
    vertical-align: top;
}

/* Hide elements */
.hidden {
    display: none;               /* Completely removes from layout */
}

.invisible {
    visibility: hidden;          /* Hides but keeps space */
}

/* Table display */
.table-layout {
    display: table;
    width: 100%;
}

.table-row {
    display: table-row;
}

.table-cell {
    display: table-cell;
    padding: 10px;
    border: 1px solid #ddd;
    vertical-align: middle;
}
```

### Position Properties
```html
<div class="position-container">
    <div class="static-box">Static (default)</div>
    <div class="relative-box">Relative</div>
    <div class="absolute-box">Absolute</div>
    <div class="fixed-box">Fixed</div>
    <div class="sticky-box">Sticky</div>
</div>
```
```css
.position-container {
    position: relative;          /* Creates positioning context */
    height: 400px;
    border: 2px solid #333;
    overflow: auto;
}

/* Static positioning (default) */
.static-box {
    position: static;
    background-color: #ffebee;
    padding: 10px;
    margin: 10px;
}

/* Relative positioning */
.relative-box {
    position: relative;
    top: 20px;                   /* Moved 20px down from normal position */
    left: 30px;                  /* Moved 30px right from normal position */
    background-color: #e8f5e8;
    padding: 10px;
    z-index: 2;
}

/* Absolute positioning */
.absolute-box {
    position: absolute;
    top: 50px;                   /* 50px from top of positioned parent */
    right: 20px;                 /* 20px from right of positioned parent */
    width: 150px;
    background-color: #fff3e0;
    padding: 10px;
    z-index: 3;
}

/* Fixed positioning */
.fixed-box {
    position: fixed;
    bottom: 20px;                /* 20px from bottom of viewport */
    right: 20px;                 /* 20px from right of viewport */
    background-color: #e3f2fd;
    padding: 10px;
    border-radius: 5px;
    z-index: 1000;
}

/* Sticky positioning */
.sticky-box {
    position: sticky;
    top: 0;                      /* Sticks to top when scrolling */
    background-color: #f3e5f5;
    padding: 10px;
    z-index: 10;
}

/* Centering with absolute positioning */
.centered-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffcdd2;
    padding: 20px;
}
```

### Float and Clear
*   **`float`**: Floats element to left or right (`left`, `right`, `none`).
*   **`clear`**: Prevents floating elements on specified sides (`left`, `right`, `both`, `none`).

### Overflow Properties
*   **`overflow`**: Controls content overflow (`visible`, `hidden`, `scroll`, `auto`).
*   **`overflow-x`**: Controls horizontal overflow.
*   **`overflow-y`**: Controls vertical overflow.

---

## 5. CSS Flexbox

Flexbox provides efficient layout for arranging items in containers.

### Flex Container Properties
```html
<div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
</div>
```

```css
/* Basic flex container */
.flex-container {
    display: flex;
    background-color: #f8f9fa;
    padding: 20px;
    gap: 10px;
}

.flex-item {
    background-color: #007bff;
    color: white;
    padding: 20px;
    text-align: center;
}

/* Flex direction examples */
.flex-row {
    display: flex;
    flex-direction: row;         /* Default: left to right */
}

.flex-column {
    display: flex;
    flex-direction: column;      /* Top to bottom */
    height: 300px;
}

.flex-row-reverse {
    display: flex;
    flex-direction: row-reverse; /* Right to left */
}

/* Justify content (main axis alignment) */
.justify-center {
    display: flex;
    justify-content: center;     /* Center items */
}

.justify-between {
    display: flex;
    justify-content: space-between; /* Space between items */
}

.justify-around {
    display: flex;
    justify-content: space-around;  /* Space around items */
}

.justify-evenly {
    display: flex;
    justify-content: space-evenly;  /* Equal space between and around */
}

/* Align items (cross axis alignment) */
.align-center {
    display: flex;
    align-items: center;
    height: 200px;
}

.align-stretch {
    display: flex;
    align-items: stretch;        /* Default: stretch to fill */
    height: 200px;
}

/* Flex wrap */
.flex-wrap {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
}

.flex-wrap .flex-item {
    flex: 0 0 150px;            /* Don't grow/shrink, 150px basis */
}

/* Perfect centering */
.perfect-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}
```

### Flex Item Properties
```css
/* Flex grow examples */
.flex-grow-container {
    display: flex;
    width: 500px;
}

.grow-1 {
    flex-grow: 1;               /* Takes 1 part of available space */
    background-color: #ff6b6b;
}

.grow-2 {
    flex-grow: 2;               /* Takes 2 parts of available space */
    background-color: #4ecdc4;
}

.no-grow {
    flex-grow: 0;               /* Doesn't grow */
    width: 100px;
    background-color: #45b7d1;
}

/* Flex shorthand examples */
.flex-equal {
    flex: 1;                    /* Equal width items */
}

.flex-fixed {
    flex: 0 0 200px;            /* Fixed 200px width */
}

.flex-auto {
    flex: auto;                 /* Size based on content */
}

/* Align self (override container alignment) */
.align-self-start {
    align-self: flex-start;
}

.align-self-center {
    align-self: center;
}

.align-self-end {
    align-self: flex-end;
}

/* Order (change visual order) */
.order-1 { order: 1; }
.order-2 { order: 2; }
.order-3 { order: 3; }

/* Common flex patterns */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.card-layout {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px;            /* Grow, shrink, 300px minimum */
    min-width: 0;               /* Prevent overflow */
}
```

---

## 6. CSS Grid

CSS Grid provides two-dimensional layout system for complex designs.

### Grid Container Properties
*   **`display: grid`**: Creates grid container.
*   **`grid-template-columns`**: Defines column sizes (`100px 200px`, `1fr 2fr`, `repeat(3, 1fr)`).
*   **`grid-template-rows`**: Defines row sizes (`100px auto`, `repeat(2, 200px)`).
*   **`grid-template-areas`**: Names grid areas for layout.
*   **`grid-gap`** / **`gap`**: Sets spacing between grid items (`10px`, `10px 20px`).
*   **`justify-items`**: Aligns items horizontally (`start`, `center`, `end`, `stretch`).
*   **`align-items`**: Aligns items vertically (`start`, `center`, `end`, `stretch`).
*   **`justify-content`**: Aligns grid horizontally within container.
*   **`align-content`**: Aligns grid vertically within container.

### Grid Item Properties
*   **`grid-column-start`** / **`grid-column-end`**: Sets column position (`1`, `span 2`).
*   **`grid-row-start`** / **`grid-row-end`**: Sets row position (`1`, `span 3`).
*   **`grid-column`**: Shorthand for column start/end (`1 / 3`, `span 2`).
*   **`grid-row`**: Shorthand for row start/end (`2 / 4`, `span 1`).
*   **`grid-area`**: Places item in named area or sets all positions.
*   **`justify-self`**: Aligns individual item horizontally.
*   **`align-self`**: Aligns individual item vertically.

---

## 7. Responsive Design and Media Queries

### Media Queries
*   **`@media`**: Applies styles based on device characteristics.
*   **Media Types**: `screen`, `print`, `all`.
*   **Media Features**: `width`, `height`, `orientation`, `resolution`.

```css
/* Mobile First Approach */
@media (min-width: 768px) {
    /* Tablet styles */
}

@media (min-width: 1024px) {
    /* Desktop styles */
}

/* Common Breakpoints */
@media (max-width: 480px) { /* Mobile */ }
@media (min-width: 481px) and (max-width: 768px) { /* Tablet */ }
@media (min-width: 769px) { /* Desktop */ }
```

### Responsive Units
*   **Relative Units**: `em`, `rem`, `%`, `vw`, `vh`, `vmin`, `vmax`.
*   **Absolute Units**: `px`, `pt`, `cm`, `mm`, `in`.
*   **Viewport Units**: `vw` (viewport width), `vh` (viewport height).

| Unit | Description | Use Case |
| :--- | :---------- | :------- |
| `px` | Pixels (absolute) | Borders, small fixed sizes |
| `em` | Relative to parent font-size | Padding, margins |
| `rem` | Relative to root font-size | Font sizes, consistent spacing |
| `%` | Percentage of parent | Widths, responsive layouts |
| `vw` | 1% of viewport width | Full-width elements |
| `vh` | 1% of viewport height | Full-height sections |

---

## 8. CSS Animations and Transitions

### Transitions
*   **`transition-property`**: Properties to animate (`all`, `color`, `transform`).
*   **`transition-duration`**: Animation duration (`0.3s`, `200ms`).
*   **`transition-timing-function`**: Animation easing (`ease`, `linear`, `ease-in-out`).
*   **`transition-delay`**: Delay before animation (`0s`, `100ms`).
*   **`transition`**: Shorthand for all transition properties.

```css
.button {
    transition: all 0.3s ease-in-out;
}

.button:hover {
    background-color: blue;
    transform: scale(1.1);
}
```

### Transforms
*   **`transform`**: Applies 2D/3D transformations.
    *   `translate(x, y)`: Moves element (`translate(10px, 20px)`).
    *   `rotate(angle)`: Rotates element (`rotate(45deg)`).
    *   `scale(x, y)`: Scales element (`scale(1.2)`, `scale(0.8, 1.5)`).
    *   `skew(x, y)`: Skews element (`skew(10deg, 5deg)`).

### Keyframe Animations
*   **`@keyframes`**: Defines animation sequence.
*   **`animation-name`**: References keyframe animation.
*   **`animation-duration`**: Animation length (`2s`, `500ms`).
*   **`animation-timing-function`**: Animation easing.
*   **`animation-delay`**: Delay before animation starts.
*   **`animation-iteration-count`**: Number of repetitions (`infinite`, `3`).
*   **`animation-direction`**: Animation direction (`normal`, `reverse`, `alternate`).
*   **`animation`**: Shorthand for all animation properties.

```css
@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

.element {
    animation: slideIn 0.5s ease-out;
}
```

---

## 9. Advanced CSS Features

### CSS Variables (Custom Properties)
```css
:root {
    --primary-color: #3498db;
    --font-size: 16px;
    --spacing: 1rem;
}

.element {
    color: var(--primary-color);
    font-size: var(--font-size);
    margin: var(--spacing);
}
```

### CSS Functions
*   **`calc()`**: Performs calculations (`calc(100% - 20px)`).
*   **`min()`**, **`max()`**: Returns minimum/maximum value.
*   **`clamp()`**: Clamps value between min and max (`clamp(1rem, 4vw, 2rem)`).
*   **`url()`**: References external resources (`url('image.jpg')`).
*   **`rgb()`**, **`hsl()`**: Color functions.

### Pseudo-classes and Pseudo-elements
*   **Structural Pseudo-classes**: `:first-child`, `:last-child`, `:nth-child(n)`.
*   **State Pseudo-classes**: `:hover`, `:focus`, `:active`, `:visited`.
*   **Form Pseudo-classes**: `:valid`, `:invalid`, `:required`, `:disabled`.
*   **Pseudo-elements**: `::before`, `::after`, `::first-line`, `::first-letter`.

---

## 10. CSS Best Practices and Performance

### Code Organization
*   **CSS Methodology**: BEM (Block Element Modifier), OOCSS, SMACSS.
*   **File Structure**: Separate files for components, utilities, and layouts.
*   **Naming Conventions**: Consistent, descriptive class names.
*   **Comments**: Document complex styles and sections.

### Performance Optimization
*   **Minimize CSS**: Remove unused styles and compress files.
*   **Efficient Selectors**: Avoid overly complex selectors.
*   **Critical CSS**: Inline critical above-the-fold styles.
*   **CSS Loading**: Use `preload` for critical stylesheets.

### Browser Compatibility
*   **Vendor Prefixes**: Use autoprefixer for cross-browser support.
*   **Feature Detection**: Use `@supports` for progressive enhancement.
*   **Fallbacks**: Provide fallback values for newer properties.

| Best Practice | Description | Implementation |
| :------------ | :---------- | :------------- |
| **Mobile-First** | Design for mobile devices first | Start with mobile styles, add desktop enhancements |
| **Semantic Classes** | Use meaningful class names | `.nav-item` instead of `.red-text` |
| **DRY Principle** | Don't Repeat Yourself | Use CSS variables and utility classes |
| **Specificity Management** | Keep specificity low and consistent | Avoid `!important`, use classes over IDs |
| **Performance** | Optimize for fast loading | Minimize CSS, use efficient selectors |
| **Accessibility** | Ensure styles don't hinder accessibility | Maintain focus indicators, sufficient contrast |

**Notes:**
- **Validation**: Use W3C CSS Validator to check for errors.
- **Testing**: Test styles across different browsers and devices.
- **Documentation**: Comment complex styles and maintain style guides.