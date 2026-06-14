# Metafields and Content Setup

Create these product metafields in Shopify admin under Settings > Metafields and metaobjects > Products.

## Product Metafields

| Name | Namespace and key | Type | Used for |
| --- | --- | --- | --- |
| Collection label | `custom.collection_label` | Single line text | Product cards and product page label |
| Product subtitle | `custom.product_subtitle` | Single line text | Product pull quote below title |
| Meaning | `custom.meaning` | Rich text | `THE MEANING` product section |
| Details | `custom.details` | Rich text | `THE DETAILS` product section |

Recommended values:

- Collection label: `COLLECTION 001`
- Product subtitle example: `This is not a hoodie you replace. It is one you keep.`
- Meaning: product-specific story, scripture foundation, or release intent.
- Details: fabric, fit, garment construction, care, Printful product model, print method, and shipping notes.

## Required Pages

Create pages in Shopify admin under Online Store > Pages.

| Page title | Handle | Theme template |
| --- | --- | --- |
| Our Story | `our-story` | `about` |
| Waitlist | `waitlist` | `waitlist` |
| Contact | `contact` | `contact` |
| Size Guide | `size-guide` | `size-guide` |

The About page template renders the Shopify page content. Paste the full Maison Logos Brand Story into the Our Story page. Use headings for:

- I. The Question
- II. The Name
- III. The Standard
- IV. The Person
- V. The Promise

## Required Collections

| Collection | Handle | Purpose |
| --- | --- | --- |
| Collection 001 | `all` or `collection-001` | Homepage featured collection |
| The Archive | `archive` | Retired collection page |

The homepage archive button only shows when the selected archive collection has products.

## Product Launch Checklist

For each product:

- Title is final.
- Product subtitle metafield is filled.
- Meaning metafield is filled.
- Details metafield is filled.
- Product description is complete.
- SEO title and meta description are set.
- Variants match Printful sizes and colors.
- Product is synced in Printful.
- Product is in the correct collection.
- Product imagery is real sample/editorial photography before public launch.

## References

- Shopify metafields: https://help.shopify.com/en/manual/custom-data/metafields
- Creating custom metafield definitions: https://help.shopify.com/en/manual/custom-data/metafields/metafield-definitions/creating-custom-metafield-definitions
