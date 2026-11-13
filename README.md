# Yumberry Bowl Franchising

A responsive franchise recruitment website for Yumberry Bowl. Built with React, TypeScript, Vite, and custom CSS.

The site includes local image assets, mobile navigation, expandable concept details, and restrained scroll effects.

## Development

Use Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

```bash
npm run check
npm test
npm run build
npm run preview
```

The production files are written to `dist/`. Relative asset paths allow the build to run at a domain root or a GitHub Pages project URL.

## Project structure

- `src/App.tsx` assembles the page and shares the selected franchise format with the inquiry form.
- `src/components/` contains the header, page sections, inquiry form, and footer.
- `src/content.ts` holds contact details and franchise support points.
- `src/inquiry.ts` builds the email draft URL.
- `src/styles.css` contains the layout, colors, typography, and responsive rules.
- `public/images/` contains the logo and bowl photography.

## Inquiry form

The form prepares an email draft addressed to Yumberry. It does not submit, save, or send inquiries. Visitors must open the draft in their email app and send it themselves. There is also a link to the existing Yumberry inquiry form.

Changing a form field invalidates the prepared draft so it cannot be mistaken for an updated message. Choosing a storefront or mobile format fills the territory field. No CRM, email service, or tracking service is included.

## Deployment

The GitHub Actions workflow checks and builds pushes and pull requests. To publish to GitHub Pages:

1. Approve the site for public access and enable Pages in the repository settings, using GitHub Actions as the source.
2. Run the **Website** workflow manually with **Deploy to GitHub Pages** enabled.

The workflow does not publish automatically. You can also upload the contents of `dist/` to another static host. This project does not depend on ChatGPT Sites or its hosting configuration.

## Content review

This is a client-review website, not an approved franchise offering. The page retains `noindex` until public launch is approved.

Before launch, confirm the current support terms, franchise formats, territory availability, contact information, and image permissions. Have Yumberry's franchise team and legal counsel review the offering language and final privacy policy. Connect and test an approved form service if direct submissions are needed.

No financial projections, investment figures, or earnings promises are included.

## Sources and assets

- [Yumberry Bowl](https://www.yumberrybowl.com/)
- [Existing franchise website](https://yumberrybowl.wixsite.com/franchising)
- [Published franchise support](https://yumberry.weebly.com/franchise-support.html)

The logo and photography came from Yumberry's websites and remain subject to their owners' rights. Their inclusion here does not grant a license for unrelated use. The small fruit illustrations are decorative, not product or nutritional claims.
