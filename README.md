# mongo-ecom

A full-stack e-commerce product catalog built with **Next.js** and **MongoDB**. Products are stored in MongoDB via Mongoose and displayed on a responsive storefront using React and Tailwind CSS.

## Features

- **Product catalog** — Responsive grid of product cards with image, title, description, price, and category
- **REST API** — Fetch all products from a Next.js Route Handler
- **Database seeding** — One-click endpoint to populate the database with sample products
- **Loading & empty states** — Skeleton placeholders while fetching and a friendly message when no products exist
- **Dark mode support** — UI adapts to the user's system color scheme

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router) |
| Frontend   | React 19, Tailwind CSS 4            |
| Database   | [MongoDB](https://www.mongodb.com)  |
| ODM        | [Mongoose](https://mongoosejs.com)  |
| Language   | JavaScript                          |

## Project Structure

```
mongo-ecom/
├── app/
│   ├── api/
│   │   ├── products/route.js   # GET /api/products
│   │   └── seed/route.js       # GET /api/seed
│   ├── globals.css             # Tailwind imports & theme
│   ├── layout.js               # Root layout
│   └── page.js                 # Home page — product grid
├── lib/
│   └── db.js                   # MongoDB connection helper
├── models/
│   └── Product.js              # Product Mongoose schema
└── public/                     # Static assets
```

## Product Schema

Each product document contains:

| Field         | Type   | Description              |
| ------------- | ------ | ------------------------ |
| `title`       | String | Product name             |
| `description` | String | Short product description|
| `price`       | Number | Price in USD             |
| `category`    | String | e.g. Electronics, Apparel|
| `image`       | String | Image URL                |

## Prerequisites

- [Node.js](https://nodejs.org) 18+
- A MongoDB database — local instance or [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

## Getting Started

### 1. Clone and install

```bash
git clone <repository-url>
cd mongo-ecom
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
```

Replace the connection string with your own MongoDB URI.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Seed the database

On first run the product list will be empty. Visit the seed endpoint to load 41 sample products:

```
http://localhost:3000/api/seed
```

You should see:

```json
{ "message": "Database seeded successfully!" }
```

Refresh the home page to view the catalog.

> **Note:** The seed route clears all existing products before inserting samples. Use it only in development.

## API Reference

### `GET /api/products`

Returns all products from the database.

**Response:** `200 OK` — JSON array of product objects.

```json
[
  {
    "_id": "...",
    "title": "Wireless Headphones",
    "description": "High-quality wireless headphones with noise cancellation.",
    "price": 129.99,
    "category": "Electronics",
    "image": "https://picsum.photos/500/300"
  }
]
```

### `GET /api/seed`

Deletes all existing products and inserts 41 sample products across categories such as Electronics, Apparel, Footwear, Accessories, Sports, and Outdoor.

**Response:** `200 OK`

```json
{ "message": "Database seeded successfully!" }
```

## Available Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start the development server   |
| `npm run build` | Create a production build      |
| `npm run start` | Start the production server    |
| `npm run lint`  | Run ESLint                     |

## Deployment

This app can be deployed to [Vercel](https://vercel.com) or any platform that supports Next.js.

1. Push your code to a Git repository.
2. Set the `MONGO_URI` environment variable in your hosting provider's dashboard.
3. Deploy — Vercel will run `next build` automatically.

Ensure your MongoDB Atlas cluster allows connections from your deployment environment (e.g. allow access from anywhere `0.0.0.0/0` or add Vercel's IP ranges).

## License

Private project.
