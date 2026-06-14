# Shopify and Printful Setup

This repo prepares the theme. Store connection, Printful installation, payments, shipping, and test orders must be completed inside your Shopify and Printful accounts.

## 1. Shopify Theme Connection

Install dependencies:

```powershell
npm install
```

Preview the theme on your store:

```powershell
npm run dev -- --store your-store.myshopify.com
```

Push an unpublished theme:

```powershell
npm run push -- --store your-store.myshopify.com --unpublished --theme "Maison Logos"
```

After the push, Shopify CLI returns an editor URL and preview URL. Use the editor URL to customize the theme in Shopify.

Optional GitHub workflow:

1. Create a private GitHub repo for this theme.
2. Set that repo as `origin`.
3. Push the branch.
4. In Shopify admin, go to Online Store > Themes > Add theme > Connect from GitHub.
5. Connect the branch to an unpublished theme.

## 2. Shopify Admin Basics

Set these before launch:

- Store name: Maison Logos
- Domain: `maisonlogos.com`
- Homepage title: `Maison Logos | Sacred Luxury Clothing`
- Meta description: `House of the Word. Premium faith-driven clothing for those who know who they are. Shop Collection 001 - Maison Logos.`
- Payments: Shopify Payments and PayPal at minimum
- Shipping zones and rates
- Taxes
- Privacy Policy, Terms of Service, Refund Policy, Shipping Policy
- Customer notification emails rewritten in Maison Logos voice

## 3. Install and Connect Printful

You need a Shopify store and a Printful account.

Connect either path:

- Shopify admin: Apps > Add apps > search for Printful > install.
- Printful dashboard: Stores > choose Shopify > Connect.

After installation:

1. Authorize Printful to access the Shopify store.
2. In Printful, open Stores and select the Shopify store.
3. Create the products in Printful or sync existing Shopify products.
4. For each Shopify product, confirm it is a physical product.
5. Confirm each product has variants for XS, S, M, L, XL, XXL if those sizes are offered.
6. Confirm product images, mockups, pricing, SKU, and shipping profiles.

## 4. Product Sync Flow

Recommended launch flow:

1. Create the product in Printful.
2. Publish it to Shopify.
3. In Shopify, refine the title, description, SEO, collection, and product metafields.
4. Assign it to Collection 001.
5. Check the product page in the theme preview.
6. Place a test order.
7. Confirm the order appears in Printful.
8. Confirm fulfillment and tracking updates return to Shopify.

If a Shopify product does not appear in Printful:

- Confirm it is marked as a physical product.
- Refresh store data in Printful.
- Check that the product is visible in Shopify sales channels.
- Check that every variant is synced.

## 5. Order Processing

For automatic Printful fulfillment, configure Shopify and Printful so paid orders with synced products are sent to Printful. Use manual fulfillment only if you want to approve every order before Printful receives it.

Before launch, run at least one full test order:

- Customer checkout
- Payment
- Shopify order creation
- Printful order import
- Fulfillment status
- Tracking update
- Customer notification emails

## 6. Theme Editor Checklist

In Shopify theme editor:

- Upload hero/editorial image.
- Choose the featured collection.
- Create or select the archive collection.
- Set footer navigation.
- Confirm product pages show Collection 001, subtitle, meaning, and details.
- Confirm sold-out products show `THIS PIECE HAS FOUND ITS HOME` and link to `/pages/waitlist`.
- Confirm mobile header, product page, cart drawer, and footer.

## References

- Shopify CLI for themes: https://shopify.dev/docs/storefronts/themes/tools/cli
- Shopify theme push command: https://shopify.dev/docs/api/shopify-cli/theme/theme-push
- Shopify GitHub theme integration: https://shopify.dev/docs/storefronts/themes/tools/github
- Printful Shopify connection: https://help.printful.com/hc/en-us/articles/21287036421404-How-do-I-connect-my-Shopify-store-to-Printful
- Printful product sync: https://help.printful.com/hc/en-us/articles/360014007480-How-do-I-add-and-sync-products-with-my-Shopify-store
- Printful fulfillment settings: https://help.printful.com/hc/en-us/articles/6148086204316-How-do-I-manage-order-processing-and-fulfillment-in-Shopify
