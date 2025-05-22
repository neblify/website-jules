# Basic Test Plan for Neblify Innovations Website

This document outlines a basic test plan to ensure the core functionality and presentation of the Neblify Innovations website (`index.html`).

## 1. HTML Validation

### Objective:
Ensure the `index.html` file adheres to W3C standards for HTML.

### Test Steps:
1.  Navigate to the W3C Markup Validation Service (validator.w3.org).
2.  Select the "Validate by File Upload" tab.
3.  Upload the `index.html` file.
4.  Review the results for any errors or warnings.

### Expected Result:
-   The validator reports "Document checking completed. No errors or warnings to show." or only minor, non-critical warnings.

## 2. Critical Element Presence

### Objective:
Verify that all essential sections and key elements are present and rendered in the Document Object Model (DOM).

### Test Steps:
1.  Open `index.html` in a web browser.
2.  Use browser developer tools (e.g., Inspect Element) to verify the presence of the following:
    *   **Header:**
        *   `<header>` element.
        *   `<h1>` with page title.
    *   **Navigation:**
        *   `<nav>` element.
        *   `<ul>` containing `<li>` elements for "Home", "About", "Services", "Contact".
        *   Each `<li>` should contain an `<a>` tag.
    *   **Hero Section:**
        *   `<section class="hero">`.
        *   `<h2>` with headline "Innovate with AI, Optimize for Growth".
        *   `<button>` with text "Learn More".
    *   **Services Section:**
        *   `<section class="services">`.
        *   `<h2>Our Services</h2>`.
        *   Three `div.service-item` elements, each containing:
            *   `<h3>` (e.g., "AI Consulting").
            *   `div.icon-placeholder`.
            *   `<p>` with service description.
    *   **About Us Section:**
        *   `<section class="about-us">`.
        *   `<h2>About Neblify Innovations</h2>`.
        *   At least one `<p>` element with company mission/description.
    *   **Contact Us Section:**
        *   `<section class="contact-us">`.
        *   `<h2>Contact Us</h2>`.
        *   A `<form>` element.
        *   Input field for Name (`<input type="text" id="name">`).
        *   Input field for Email (`<input type="email" id="email">`).
        *   Textarea for Message (`<textarea id="message">`).
        *   Submit button (`<button type="submit">`).
        *   Paragraph with contact email and phone number.
    *   **Footer:**
        *   `<footer>` element.
        *   `<p>` with copyright information.
    *   **CSS and JavaScript Links:**
        *   `<link rel="stylesheet" href="style.css">` in the `<head>`.
        *   `<script src="script.js"></script>` before the closing `</body>` tag.

### Expected Result:
-   All listed sections and elements are present in the DOM with the correct content/attributes as specified.

## 3. Responsiveness Check

### Objective:
Verify that the website layout and styling adjust correctly to different screen sizes.

### Test Steps (Manual):
1.  Open `index.html` in a modern web browser (e.g., Chrome, Firefox, Edge).
2.  Open the browser's developer tools.
3.  Activate the device simulation mode (often called "Responsive Design Mode" or "Device Toolbar").
4.  Test the following viewport widths (and representative devices if available):
    *   **Desktop:** 1920px, 1366px
    *   **Tablet:** 768px (e.g., iPad portrait), 1024px (e.g., iPad landscape - though styles might target max-width: 768px, good to check wider tablet views)
    *   **Mobile:** 480px, 375px (e.g., iPhone X), 320px (e.g., older/smaller iPhones)
5.  For each viewport size, check for:
    *   **Readability:** Text should be legible, not too small or overflowing.
    *   **Layout:** Sections should stack or resize appropriately. No horizontal scrolling should be introduced by content.
    *   **Navigation:** The navigation menu should be usable. On smaller screens, links should stack vertically as designed.
    *   **Element Sizing:** Buttons and form inputs should be appropriately sized for touch interaction on mobile devices.
    *   **Image/Icon Placeholders:** Ensure they scale or adapt correctly if actual images/icons were present.

### Expected Result:
-   The website content remains readable and usable across all tested screen sizes.
-   Layout adjusts according to the CSS media queries (e.g., navigation stacking, font size changes).
-   No broken layouts or content overflow.

## 4. Interaction Check

### Objective:
Verify that basic JavaScript interactions, like hover effects, are working as intended.

### Test Steps (Manual):
1.  Open `index.html` in a web browser on a desktop computer (or a device with mouse input).
2.  Locate the "Learn More" button within the Hero section.
3.  Hover the mouse cursor over the "Learn More" button.
4.  Move the mouse cursor off the button.

### Expected Result:
-   When the mouse hovers over the button, it should visually change (e.g., scale up slightly as per `script.js`).
-   When the mouse moves off the button, it should return to its original appearance.

---

This test plan provides a basic level of quality assurance. For a production website, more comprehensive testing (including cross-browser testing, accessibility testing, performance testing, and form submission testing) would be recommended.
