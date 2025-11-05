# HTML

## What is HTML?

**HTML** (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup elements called **tags**.

HTML is the **foundation** of all web development and is essential for creating any website or web application.

---

## 1. Introduction to HTML and Web Development
### HTML (HyperText Markup Language)
*   **Definition**: HTML is a markup language that uses tags to structure content on web pages. It is not a programming language but a markup language.
*   **Basic Structure**: HTML documents follow a standard structure with elements like `<html>`, `<head>`, and `<body>`.
*   **Elements and Tags**: HTML uses elements (defined by tags) to mark up content:
    *   **Opening Tag**: `<tagname>`
    *   **Content**: The actual content between tags
    *   **Closing Tag**: `</tagname>`
    *   **Self-closing Tags**: `<img />`, `<br />`, `<hr />`

### Web Browsers
*   **Definition**: Web browsers are software applications that interpret and display HTML documents.
*   **Examples**: Chrome, Firefox, Safari, Edge.
*   **Rendering**: Browsers parse HTML and create the Document Object Model (DOM) to display web pages.

### HTML Document Structure
*   **HTML** documents have a hierarchical structure starting with the `<!DOCTYPE html>` declaration.
*   The basic structure includes `<html>`, `<head>`, and `<body>` elements.

### HTML vs. CSS vs. JavaScript
*   **HTML** provides the structure and content of web pages.
*   **CSS** handles the styling and layout of HTML elements.
*   **JavaScript** adds interactivity and dynamic behavior to web pages.

---
## 2. Types of HTML Elements

HTML elements are categorized as follows:

*   **Structure Elements**: Define the basic structure of an HTML document.
    *   `<!DOCTYPE html>`: Declares the document type and HTML version.
    *   `<html>`: Root element of an HTML page.
    *   `<head>`: Contains metadata about the document.
    *   `<body>`: Contains the visible page content.
    *   `<title>`: Sets the title of the document.
*   **Semantic Elements**: Provide meaning to the content structure.
    *   `<header>`: Represents introductory content.
    *   `<nav>`: Defines navigation links.
    *   `<main>`: Specifies the main content.
    *   `<section>`: Defines sections in a document.
    *   `<article>`: Represents independent, self-contained content.
    *   `<aside>`: Defines content aside from the main content.
    *   `<footer>`: Represents footer information.
*   **Text Elements**: Used to format and structure text content.
    *   `<h1>` to `<h6>`: Heading elements (largest to smallest).
    *   `<p>`: Paragraph element.
    *   `<span>`: Inline container for text.
    *   `<div>`: Block-level container element.
*   **List Elements**: Create ordered and unordered lists.
    *   `<ul>`: Unordered list.
    *   `<ol>`: Ordered list.
    *   `<li>`: List item.
    *   `<dl>`: Description list.
    *   `<dt>`: Description term.
    *   `<dd>`: Description definition.
*   **Media Elements**: Embed multimedia content.
    *   `<img>`: Embeds images.
    *   `<audio>`: Embeds audio content.
    *   `<video>`: Embeds video content.
    *   `<source>`: Specifies multiple media resources.

### Text Formatting and Emphasis
*   **`<strong>`**: Indicates strong importance (bold by default).
*   **`<em>`**: Indicates emphasis (italic by default).
*   **`<mark>`**: Highlights text.
*   **`<small>`**: Represents smaller text.
*   **`<del>`**: Represents deleted text (strikethrough).
*   **`<ins>`**: Represents inserted text (underlined).
*   **`<sub>`**: Subscript text.
*   **`<sup>`**: Superscript text.

### Links and Navigation
*   **`<a>`**: Creates hyperlinks using the `href` attribute.
*   **`href` values**:
    *   Absolute URLs: `https://example.com`
    *   Relative URLs: `./page.html` or `../folder/page.html`
    *   Anchors: `#section-id`
    *   Email: `mailto:email@example.com`
    *   Phone: `tel:+1234567890`

### Forms and Input Elements
*   **`<form>`**: Creates a form for user input with attributes like `action`, `method`, `enctype`.
*   **`<input>`**: Creates various input fields based on the `type` attribute.
*   **`<textarea>`**: Creates multi-line text input with `rows` and `cols` attributes.
*   **`<select>`**: Creates dropdown lists with `<option>` elements.
*   **`<option>`**: Defines options in a select element with `value` attribute.
*   **`<optgroup>`**: Groups related options in a select element.
*   **`<button>`**: Creates clickable buttons with `type` attribute (submit, reset, button).
*   **`<label>`**: Associates labels with form controls using `for` attribute.
*   **`<fieldset>`**: Groups related form elements together.
*   **`<legend>`**: Provides a caption for a fieldset.
*   **`<datalist>`**: Provides autocomplete options for input elements.

| Input Type | Description | Attributes |
| :--------- | :---------- | :--------- |
| `<input type="text">` | Single-line text input | `maxlength`, `minlength`, `pattern`, `placeholder` |
| `<input type="email">` | Email input with validation | `multiple`, `pattern`, `placeholder` |
| `<input type="password">` | Password input (hidden text) | `minlength`, `maxlength`, `pattern` |
| `<input type="number">` | Numeric input | `min`, `max`, `step`, `placeholder` |
| `<input type="range">` | Slider input | `min`, `max`, `step`, `value` |
| `<input type="date">` | Date picker | `min`, `max`, `value` |
| `<input type="time">` | Time picker | `min`, `max`, `step`, `value` |
| `<input type="datetime-local">` | Date and time picker | `min`, `max`, `step`, `value` |
| `<input type="color">` | Color picker | `value` |
| `<input type="checkbox">` | Checkbox for multiple selections | `checked`, `value` |
| `<input type="radio">` | Radio button for single selection | `checked`, `value`, `name` |
| `<input type="file">` | File upload input | `accept`, `multiple`, `capture` |
| `<input type="hidden">` | Hidden input field | `value` |
| `<input type="search">` | Search input field | `placeholder`, `results` |
| `<input type="tel">` | Telephone number input | `pattern`, `placeholder` |
| `<input type="url">` | URL input | `pattern`, `placeholder` |
| `<input type="submit">` | Form submission button | `value`, `formaction`, `formmethod` |
| `<input type="reset">` | Form reset button | `value` |
| `<input type="button">` | Generic button | `value` |

### Table Elements
*   **`<table>`**: Creates a table with optional attributes like `border`, `cellpadding`, `cellspacing`.
*   **`<thead>`**: Groups header content in a table.
*   **`<tbody>`**: Groups body content in a table.
*   **`<tfoot>`**: Groups footer content in a table.
*   **`<tr>`**: Defines a table row.
*   **`<th>`**: Defines a header cell with attributes like `scope`, `colspan`, `rowspan`.
*   **`<td>`**: Defines a data cell with attributes like `colspan`, `rowspan`.
*   **`<caption>`**: Provides a table caption.
*   **`<colgroup>`**: Groups columns for styling.
*   **`<col>`**: Defines column properties within a colgroup.

### Multimedia Elements
*   **`<img>`**: Embeds images with attributes like `src`, `alt`, `width`, `height`, `srcset`, `sizes`.
*   **`<picture>`**: Provides multiple image sources for responsive images.
*   **`<source>`**: Specifies multiple media resources for `<picture>`, `<audio>`, or `<video>`.
*   **`<audio>`**: Embeds audio content with attributes like `controls`, `autoplay`, `loop`, `muted`.
*   **`<video>`**: Embeds video content with attributes like `controls`, `autoplay`, `loop`, `muted`, `poster`.
*   **`<track>`**: Provides text tracks for video and audio elements (subtitles, captions).
*   **`<embed>`**: Embeds external content like plugins.
*   **`<object>`**: Embeds external resources with fallback content.
*   **`<iframe>`**: Embeds another HTML document with attributes like `src`, `width`, `height`, `sandbox`.

### Interactive Elements
*   **`<details>`**: Creates a disclosure widget that can be toggled open/closed.
*   **`<summary>`**: Provides a summary or label for a `<details>` element.
*   **`<dialog>`**: Represents a dialog box or modal window.
*   **`<menu>`**: Represents a list of commands or options.
*   **`<menuitem>`**: Represents a command in a menu (deprecated in HTML5.2).

### Grouping and Container Elements
*   **`<div>`**: Generic block-level container with no semantic meaning.
*   **`<span>`**: Generic inline container with no semantic meaning.
*   **`<main>`**: Represents the main content area of a document.
*   **`<section>`**: Represents a thematic grouping of content.
*   **`<article>`**: Represents independent, self-contained content.
*   **`<aside>`**: Represents content tangentially related to the main content.
*   **`<header>`**: Represents introductory content or navigational aids.
*   **`<footer>`**: Represents footer information for its nearest sectioning content.
*   **`<nav>`**: Represents a section of navigation links.
*   **`<address>`**: Represents contact information for the author or owner.

---

## 3. HTML Attributes

HTML attributes provide additional information about elements and modify their behavior.

| Attribute Type | Description |
| :------------- | :---------- |
| **Global Attributes** | |
| `id` | Unique identifier for an element |
| `class` | CSS class name(s) for styling |
| `style` | Inline CSS styles |
| `title` | Tooltip text |
| `lang` | Language of the element's content |
| `data-*` | Custom data attributes |
| **Link Attributes** | |
| `href` | URL or anchor reference |
| `target` | Where to open the linked document |
| `rel` | Relationship between current and linked document |
| **Image Attributes** | |
| `src` | Source URL of the image |
| `alt` | Alternative text for accessibility |
| `width` | Width of the image |
| `height` | Height of the image |
| `srcset` | Set of source images for responsive design |
| **Form Attributes** | |
| `action` | URL where form data is sent |
| `method` | HTTP method (GET or POST) |
| `name` | Name of the form control |
| `value` | Default value of the input |
| `placeholder` | Hint text for input fields |
| `required` | Makes the field mandatory |
| `disabled` | Disables the form control |
| **Table Attributes** | |
| `colspan` | Number of columns a cell should span |
| `rowspan` | Number of rows a cell should span |
| `scope` | Specifies header cell scope |

**Notes:**
- **Boolean Attributes**: Some attributes like `required`, `disabled`, `checked` are boolean (present or absent).
- **Case Sensitivity**: HTML attributes are case-insensitive, but lowercase is recommended.
- **Quotes**: Attribute values should be enclosed in quotes, especially if they contain spaces.

---
## 4. HTML Document Structure and Best Practices

### Basic HTML Document Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <!-- Page content goes here -->
</body>
</html>
```

### Meta Tags
Meta tags provide metadata about the HTML document.

*   **Character encoding**: `<meta charset="UTF-8">` (Always include this first).
*   **Viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` (Essential for responsive design).
*   **Description**: `<meta name="description" content="Page description">` (Important for SEO).
*   **Keywords**: `<meta name="keywords" content="keyword1, keyword2">` (Less important for modern SEO).
*   **Author**: `<meta name="author" content="Author Name">`.

### Semantic HTML Structure
```html
<body>
    <header>
        <nav>
            <!-- Navigation links -->
        </nav>
    </header>
    
    <main>
        <section>
            <article>
                <!-- Main content -->
            </article>
            <aside>
                <!-- Sidebar content -->
            </aside>
        </section>
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
</body>
```

### Accessibility Best Practices
*   **Alt text**: Always provide meaningful `alt` attributes for images.
*   **Heading hierarchy**: Use headings (`h1`-`h6`) in logical order.
*   **Form labels**: Associate labels with form controls using `for` attribute or by wrapping.
*   **ARIA attributes**: Use ARIA roles and properties when semantic HTML isn't sufficient.
*   **Keyboard navigation**: Ensure all interactive elements are keyboard accessible.

### Performance Considerations
*   **Image optimization**: Use appropriate image formats and sizes.
*   **Minimize HTTP requests**: Combine CSS and JavaScript files when possible.
*   **Lazy loading**: Use `loading="lazy"` for images below the fold.
*   **Preload critical resources**: Use `<link rel="preload">` for important assets.

### SEO Best Practices
*   **Title Tags**: Unique, descriptive titles for each page (50-60 characters).
*   **Meta Descriptions**: Compelling descriptions for search results (150-160 characters).
*   **Heading Structure**: Logical hierarchy with single H1 per page.
*   **Internal Linking**: Link to related content within your site.
*   **URL Structure**: Clean, descriptive URLs.
*   **Image Alt Text**: Descriptive alternative text for images.

| Best Practice | Description | Implementation |
| :------------ | :---------- | :------------- |
| **Semantic HTML** | Use appropriate HTML elements for their intended purpose | `<article>`, `<section>`, `<nav>` instead of `<div>` |
| **Valid HTML** | Ensure HTML validates according to W3C standards | Use W3C Markup Validator regularly |
| **Accessibility** | Make content accessible to users with disabilities | ARIA attributes, proper contrast, keyboard navigation |
| **Performance** | Optimize for fast loading and rendering | Compress images, minify code, use CDNs |
| **SEO** | Structure content for search engine optimization | Proper meta tags, semantic markup, structured data |
| **Maintainability** | Write clean, organized, and well-commented code | Consistent naming, proper indentation, comments |
| **Mobile-First** | Design for mobile devices first | Responsive design, touch-friendly interfaces |
| **Security** | Protect against common vulnerabilities | Validate inputs, use HTTPS, implement CSP |

**Notes:**
- **Validation**: Always validate your HTML using the W3C Markup Validator.
- **Progressive Enhancement**: Start with a solid HTML foundation, then enhance with CSS and JavaScript.
- **Mobile-First**: Design for mobile devices first, then enhance for larger screens.

---

## 5. HTML5 Features and APIs

### New HTML5 Input Types and Attributes
*   **Input Validation**: HTML5 provides built-in form validation.
    *   `required`: Makes a field mandatory.
    *   `pattern`: Specifies a regular expression for validation.
    *   `min` / `max`: Sets minimum and maximum values.
    *   `step`: Specifies the interval between valid values.
*   **Form Validation States**: CSS pseudo-classes for styling validation states.
    *   `:valid`: Styles valid form elements.
    *   `:invalid`: Styles invalid form elements.
    *   `:required`: Styles required form elements.
    *   `:optional`: Styles optional form elements.

### HTML5 Semantic Elements Benefits
*   **SEO Improvement**: Search engines better understand content structure.
*   **Accessibility**: Screen readers can navigate content more effectively.
*   **Code Readability**: Developers can understand code structure more easily.
*   **Future-Proof**: Semantic elements are more maintainable and extensible.

### HTML5 APIs (Overview)
*   **Local Storage**: `localStorage` and `sessionStorage` for client-side data storage.
*   **Geolocation**: Access user's geographical location.
*   **Canvas**: 2D drawing and graphics manipulation.
*   **Web Workers**: Background JavaScript execution.
*   **History API**: Manipulate browser history without page refresh.
*   **File API**: Access and manipulate files from user's device.
*   **Drag and Drop**: Native drag and drop functionality.

---

## 6. Advanced HTML Concepts

### ARIA (Accessible Rich Internet Applications)
ARIA attributes enhance accessibility for dynamic content and complex UI components.

| ARIA Attribute | Description | Example |
| :------------- | :---------- | :------ |
| `role` | Defines what an element is or does | `role="button"`, `role="navigation"` |
| `aria-label` | Provides accessible name for element | `aria-label="Close dialog"` |
| `aria-labelledby` | References other elements that label this element | `aria-labelledby="heading-id"` |
| `aria-describedby` | References elements that describe this element | `aria-describedby="help-text"` |
| `aria-hidden` | Hides decorative elements from screen readers | `aria-hidden="true"` |
| `aria-expanded` | Indicates if collapsible element is expanded | `aria-expanded="false"` |
| `aria-live` | Announces dynamic content changes | `aria-live="polite"` |
| `aria-current` | Indicates current item in a set | `aria-current="page"` |

### Microdata and Structured Data
*   **Microdata**: HTML specification for embedding machine-readable data.
*   **Schema.org**: Vocabulary for structured data markup.
*   **JSON-LD**: JavaScript Object Notation for Linked Data (preferred by Google).

```html
<!-- Microdata example -->
<div itemscope itemtype="https://schema.org/Person">
    <span itemprop="name">John Doe</span>
    <span itemprop="jobTitle">Software Developer</span>
</div>
```

### Custom Elements and Web Components
*   **Custom Elements**: Define new HTML elements with custom behavior.
*   **Shadow DOM**: Encapsulated DOM and styling.
*   **HTML Templates**: Reusable markup templates.

### Progressive Web App (PWA) Features
*   **Web App Manifest**: JSON file defining app metadata.
*   **Service Workers**: Background scripts for offline functionality.
*   **App Shell**: Minimal HTML, CSS, and JavaScript for instant loading.

---

## 7. HTML Validation and Debugging

### Common HTML Errors
*   **Unclosed Tags**: Every opening tag must have a corresponding closing tag.
*   **Nested Tags**: Tags must be properly nested (LIFO - Last In, First Out).
*   **Invalid Attributes**: Using attributes that don't exist or are misspelled.
*   **Missing Required Attributes**: Elements like `<img>` require `src` and `alt` attributes.
*   **Incorrect Nesting**: Block elements inside inline elements (invalid).

### Validation Tools
*   **W3C Markup Validator**: Official HTML validation service.
*   **Browser Developer Tools**: Built-in validation and debugging.
*   **HTML5 Validator**: Specific HTML5 validation tools.
*   **Accessibility Validators**: Tools like axe, WAVE for accessibility testing.

### Browser Compatibility
*   **Can I Use**: Website for checking browser support for HTML features.
*   **Polyfills**: JavaScript code that provides modern functionality in older browsers.
*   **Progressive Enhancement**: Build basic functionality first, then enhance for modern browsers.
*   **Graceful Degradation**: Ensure functionality works even when advanced features aren't supported.

| HTML5 Feature | IE Support | Chrome | Firefox | Safari |
| :------------ | :--------- | :----- | :------ | :----- |
| Semantic Elements | IE9+ | All | All | All |
| Form Validation | IE10+ | All | All | All |
| Local Storage | IE8+ | All | All | All |
| Canvas | IE9+ | All | All | All |
| Video/Audio | IE9+ | All | All | All |

---

## 8. Performance and Optimization

### Image Optimization
*   **Format Selection**: Use WebP for modern browsers, JPEG for photos, PNG for graphics.
*   **Responsive Images**: Use `srcset` and `sizes` attributes for different screen sizes.
*   **Lazy Loading**: Use `loading="lazy"` attribute for images below the fold.
*   **Image Compression**: Optimize file sizes without significant quality loss.

### Resource Loading Optimization
*   **Critical Resource Hints**:
    *   `<link rel="preload">`: Load critical resources early.
    *   `<link rel="prefetch">`: Load resources for future navigation.
    *   `<link rel="dns-prefetch">`: Resolve DNS early for external domains.
    *   `<link rel="preconnect">`: Establish early connections to external domains.

### Script Loading Strategies
*   **`defer`**: Download script in parallel, execute after HTML parsing.
*   **`async`**: Download and execute script as soon as available.
*   **Module Scripts**: Use `type="module"` for ES6 modules.

```html
<!-- Critical CSS inline -->
<style>
    /* Critical above-the-fold styles */
</style>

<!-- Non-critical CSS -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- JavaScript loading strategies -->
<script src="critical.js"></script>
<script src="non-critical.js" defer></script>
<script src="analytics.js" async></script>
```