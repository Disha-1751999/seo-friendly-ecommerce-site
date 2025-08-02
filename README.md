# E-commerce Product Showcase with Checkout (SEO-Optimized)

## Project Description

This project is a minimal but fully functional e-commerce frontend built using Next.js (App Router), Redux Toolkit, Tailwind CSS, and TypeScript.  
It showcases products fetched from the Fake Store API and implements cart, checkout, and order management entirely on the client side with Redux.  
SEO best practices such as dynamic meta tags, optimized image handling, semantic HTML, and inclusion of `robots.txt` and `sitemap.xml` have been implemented.

---

## Features

### 1. Home Page (`/`)
- Fetches product list from [Fake Store API](https://fakestoreapi.com/products)
- Responsive grid layout using Tailwind CSS
- Displays product title, price, and thumbnail
- "View Details" button links to individual product pages

### 2. Product Details Page (`/product/[id]`)
- Shows full product information
- Includes "Add to Cart" button with Redux-managed cart
- Uses `getStaticPaths` and `getStaticProps` for Static Site Generation (SSG)
- Dynamic `<title>` and `<meta description>` tags per product for SEO

### 3. Cart and Checkout (`/checkout`)
- Cart state managed using Redux Toolkit
- Checkout form collects:
  - Full Name
  - Shipping Address
  - Phone Number
- Form validation included
- Upon submission, displays a "Thank You" confirmation and stores the order in Redux

### 4. Order List Page (`/orders`)
- Displays a table of placed orders stored in Redux
- Each order includes:
  - Order ID
  - Customer Name
  - Total Items
  - Total Amount
  - Order Date
- Clicking on an order shows detailed order information

---

## SEO Optimization

- Dynamic `<title>` and `<meta description>` on all pages using Next.js `generateMetadata` function (or `next/head`)
- Inclusion of `robots.txt` and `sitemap.xml` files for crawl guidance and site indexing
- Use of semantic HTML elements like `<main>`, `<section>`, and `<article>`
- All images use descriptive `alt` attributes for accessibility and SEO
- Clean, crawlable URLs such as `/product/5` and `/orders`

---

## Tech Stack

- **Next.js (App Router)**  
- **Redux Toolkit**  
- **TypeScript**  
- **Tailwind CSS**

---

## Setup Guide

1. Clone the repository:

   ```bash
   git clone https://github.com/Disha-1751999/seo-friendly-ecommerce-site

   ```

2. Install dependencies:

   ```bash
   npm install
   
   ```   

3. Run the development server:

   ```bash
   npm run dev
   
   ```   

## Project Structure Overview

```plaintext
app/
┣ layout.tsx # Root layout 
┣ page.tsx # Home page
┣ product/
┃ ┗ [id]/
┃ ┗ page.tsx # Product details page
┣ checkout/
┃ ┗ page.tsx # Checkout page 
┣ orders/
┃ ┗ page.tsx # Orders list page
features/
┣ cart/ 
┣ orders/ 
components/
┣ AddToCartButton.tsx 
┣ ProductCard.tsx 
┣ ProductList.tsx 
┣ Header.tsx 
┣ Footer.tsx 
┣ HeroSection.tsx 
utils/
┣ getProducts.ts 
┣ getProductById.ts 
public/
┗ robots.txt 
┗ sitemap.xml 
```

## SEO Techniques Used

- **Dynamic Metadata:**  
  Using Next.js `generateMetadata` or `next/head` to set page-specific titles and meta descriptions dynamically for better search rankings.

- **Semantic HTML:**  
  Proper usage of `<main>`, `<section>`, `<article>`, and headings to improve accessibility and SEO crawling.

- **Image Optimization:**  
  Using Next.js `<Image>` component with `alt` attributes to optimize image loading and improve SEO signals.

- **Robots.txt and Sitemap:**  
  Added `robots.txt` to guide search engine crawlers and `sitemap.xml` to help them discover all pages efficiently, implemented using packages `next-sitemap`

- **Clean URLs:**  
  Friendly, descriptive, and consistent URLs like `/product/5` instead of query strings to improve readability and SEO.

  ## Live link 
  [Link](https://seo-friendly-ecommerce-site.vercel.app)
