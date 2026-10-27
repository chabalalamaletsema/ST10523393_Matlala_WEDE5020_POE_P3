# O.T Kitchen Website — WEDE5020 POE Part 3

## Project overview
O.T Kitchen is a responsive informational website for a local food kitchen in Pankop. It contains Home, About, Menu, Enquiry and Contact pages. The project uses HTML5, CSS3 and vanilla JavaScript.

## Folder structure
- `index.html` — home page and clickable food gallery
- `about.html` — story, mission, values and FAQ accordion
- `menu.html` — menu table with search, category filter and sorting
- `enquiry.html` — order and product enquiry form with validation
- `contact.html` — contact details, interactive map, directions link and contact form
- `css/style.css` — responsive design, colours, transitions and form feedback
- `js/main.js` — menu tools, lightbox, FAQ accordion, form validation and current year
- `images/` — food images used by the website
- `robots.txt` and `sitemap.xml` — SEO support files

## How to run the website
1. Download and extract the project ZIP.
2. Open the extracted `ST10523393_Matlala_WEDE5020_POE_P3` folder in Visual Studio Code.
3. Open `index.html` in a browser, or install the Live Server extension in VS Code, right-click `index.html`, and choose **Open with Live Server**.
4. Internet access is needed for Google Fonts and the embedded Google Map. The main pages and local JavaScript can otherwise be opened as static files.

## Part 3 functionality implemented
- **Menu search:** search all menu item text by item name or description.
- **Filter and sort:** filter by Kotas, Extras or Bread and sort by name or price.
- **Dynamic results:** result count updates and an explanatory message appears when there are no matches.
- **Interactive image gallery:** click or keyboard-activate a homepage image to open a lightbox; close it with the close button, outside click or Escape key.
- **FAQ accordion:** questions on the About page open and close with accessible expanded-state attributes.
- **Enquiry form validation:** checks a name of at least three characters, a phone number containing at least ten digits, and a message of at least five characters. Errors appear beside fields.
- **Contact form validation:** checks name, email format and message length. Valid input prepares an email using the visitor's email application.
- **Location feature:** the Contact page embeds a Google Map centred on Pankop and links to Google Maps directions.
- **Responsive and accessible design:** mobile viewport, responsive layouts, keyboard focus styles, skip link, labelled form fields, image alt text, and reduced-motion support.
- **SEO:** descriptive page titles and meta descriptions, heading structure, internal navigation, alt text, robots.txt and sitemap.xml template.

## Form limitations and configuration
This is a front-end student project. The enquiry form validates and displays a response in the browser but does not send or save submissions. The contact form opens the visitor's default email application with a pre-filled message. In `js/main.js`, replace `otkitchen@example.com` with the organisation's confirmed email address before publishing. Do not claim the form sends messages automatically unless a backend or form service is configured.

## SEO tasks before publishing
1. Replace `https://YOUR-DEPLOYED-DOMAIN` in `sitemap.xml` with the final published website URL.
2. Update `robots.txt` with a sitemap line after the real domain is known, for example `Sitemap: https://your-domain.example/sitemap.xml`.
3. Test the website on mobile and desktop and compress images if required.
4. Submit the sitemap in Google Search Console after deployment, if applicable.
5. Confirm all business details, menu prices, opening hours and the email address with the organisation before final submission.

## Changelog
### 2026-10-22 — Part 3 implementation
- Added searchable menu, category filtering, sorting and a live result count.
- Added an accessible lightbox to homepage food images with keyboard support and Escape-to-close.
- Added a FAQ accordion to the About page.
- Improved enquiry and contact forms with JavaScript validation, inline error messages, accessible invalid-state attributes and response messages.
- Added a Google Maps embed and directions link to the Contact page.
- Improved page-specific SEO metadata, social preview metadata, image alt text, lazy loading, keyboard focus visibility and mobile layouts.
- Added current-year footer behaviour and documented project structure, setup, limitations and deployment tasks.
- Removed unused duplicate HTML files from the JavaScript folder and removed the obsolete duplicate validation script.

### Part 2 feedback corrections
Add the lecturer's actual Part 2 feedback here and record each correction made. Do not state that a specific feedback correction was completed until the actual feedback has been reviewed.

## References
- MDN Web Docs. (n.d.). *HTML: HyperText Markup Language*. https://developer.mozilla.org/en-US/docs/Web/HTML
- MDN Web Docs. (n.d.). *CSS: Cascading Style Sheets*. https://developer.mozilla.org/en-US/docs/Web/CSS
- MDN Web Docs. (n.d.). *JavaScript*. https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Google Search Central. (n.d.). *SEO Starter Guide*. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Maps. (n.d.). *Google Maps directions and embedded map*. https://maps.google.com/
