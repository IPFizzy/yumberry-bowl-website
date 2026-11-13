# Yumberry Bowl Franchising

A responsive **franchise recruitment website concept** for Yumberry Bowl, a smoothie bowl business founded in Grants Pass, Oregon. The project presents the brand, franchise support, available business formats, and inquiry process through a clear, visually focused single-page experience.

<p>
  <img src="https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Status-Client%20Review-238636?style=flat-square" alt="Project status: Client Review" />
</p>

## Project Overview

This project redesigns Yumberry Bowl's existing franchise website to make the opportunity easier for prospective owners to understand. It preserves the established logo, colors, and food photography while improving the page layout, navigation, and presentation of franchise information.

The focus is a practical recruitment website: explain the business, organize the reasons to franchise, and give interested visitors a straightforward way to start a conversation.

## Project Goals

- Present franchise information in concise, well-formatted sections.
- Make training, location guidance, marketing, and operating resources easy to compare.
- Preserve Yumberry's recognizable identity while improving visual consistency.
- Create a balanced layout with even spacing, clear headings, and strong food imagery.
- Support comfortable browsing on phones, tablets, and desktop screens.
- Reduce friction between learning about the opportunity and making an inquiry.
- Keep franchise claims grounded in published materials and clearly identify items requiring review.

## Features

- Sticky navigation with direct links to each major section
- Responsive hero with bowl photography and decorative fruit illustrations
- Subtle scroll movement with reduced-motion support
- Expandable information about the business concept
- Organized franchise support cards with specific points
- Storefront and mobile format sections
- Four-step introduction to the inquiry process
- Franchise format selection that carries into the inquiry form
- Required-field validation and an email-draft handoff
- Privacy notice and a link to Yumberry's existing inquiry form
- Semantic page structure, keyboard-accessible controls, and mobile navigation

## Design Approach

The design centers on Yumberry's food and brand identity. White backgrounds, rounded shapes, turquoise accents, and bright photography establish a fresh visual style without overwhelming the franchise information.

Copy is kept direct. Support points are grouped into readable cards, and each section has a defined purpose. Decorative movement is restrained so the content remains the main focus.

## Technology

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Language | TypeScript 5.9 |
| Build Tool | Vite 8 |
| Styling | Custom CSS |
| Assets | Local WebP images and SVG illustrations |
| Validation | TypeScript checks and inquiry URL tests |

## Project Organization

Page sections are separated into reusable components in `src/components/`. Shared contact information and franchise support points are maintained in `src/content.ts`, while `src/styles.css` contains the visual design and responsive rules. The email draft logic is isolated in `src/inquiry.ts`.

## Current Scope

The frontend is prepared for client review. The inquiry form creates an email draft; it does not save or send submissions. Visitors review and send the message in their email application, or follow the link to the existing inquiry form.

Franchise offering language, support terms, business formats, contact information, privacy wording, and asset permissions require final approval before an official launch. The project does not include financial projections, earnings promises, a CRM, or a franchise management backend.

## Content and Assets

Brand information and imagery are drawn from [Yumberry Bowl](https://www.yumberrybowl.com/), its [existing franchise website](https://yumberrybowl.wixsite.com/franchising), and its [published franchise support materials](https://yumberry.weebly.com/franchise-support.html). The logo and photography remain subject to their owners' rights.
