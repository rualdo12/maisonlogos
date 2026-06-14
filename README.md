# Maison Logos Shopify Theme

Maison Logos is built on Shopify Dawn 15.4.1 with custom Maison sections, product styling, templates, and setup documentation.

## Local Setup

```powershell
npm install
npm run check
npm run dev -- --store your-store.myshopify.com
```

`npm run dev` starts a Shopify development theme and opens a preview/editor session after you authenticate with the store owner or staff account.

To upload as an unpublished theme:

```powershell
npm run push -- --store your-store.myshopify.com --unpublished --theme "Maison Logos"
```

Publish only after products, policies, checkout, shipping, domain, and test orders are complete.

## What Is Included

- Dawn-compatible Shopify Online Store 2.0 theme structure.
- Maison Logos homepage section.
- Luxury product page template with custom CTA and sold-out waitlist copy.
- About, Contact, Waitlist, Size Guide, Archive collection, and 404 templates.
- Maison Logos brand CSS, Google Fonts, colors, product cards, header, and footer.
- Shopify CLI scripts in `package.json`.
- Setup guides in `docs/`.

## Key Files

- `assets/maison-logos.css`
- `sections/maison-homepage.liquid`
- `sections/maison-about-page.liquid`
- `sections/maison-waitlist.liquid`
- `templates/index.json`
- `templates/product.json`
- `docs/shopify-printful-setup.md`
- `docs/metafields-and-content.md`

## Required Shopify Admin Work

Create these pages and assign the matching templates:

- Our Story: template `about`
- Waitlist: template `waitlist`
- Size Guide: template `size-guide`
- Contact: template `contact`

Create these collections:

- `all` or your launch collection for Collection 001
- `archive` for retired pieces

Create the product metafields listed in `docs/metafields-and-content.md`.

## Brand Notes

Use real product/editorial photography before launch. The homepage can fall back to the first featured product image, but the final brand should not launch with Shopify placeholder artwork.
