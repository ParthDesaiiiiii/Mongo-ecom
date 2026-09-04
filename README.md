# AI-Powered E-Commerce Website

A modern AI-powered e-commerce web application designed to provide users with a seamless and personalized online shopping experience. The project combines modern web development technologies with AI capabilities and MongoDB to manage products and application data.

## Features

- Modern e-commerce shopping experience
- AI-powered functionality and recommendations
- Product browsing and discovery
- MongoDB database integration
- User-focused shopping experience
- Responsive and modern user interface
- Dynamic product management

## Technologies Used

| Area | Technology |
| --- | --- |
| Frontend | Next.js, React, Tailwind CSS |
| Backend | Next.js API Routes |
| Database | MongoDB (Mongoose) |
| AI | OpenAI API |
| Authentication | NextAuth.js |
| Development Environment | VS Code |
| Version Control | Git & GitHub |

## Project Goal

The goal of this project is to build a full-stack e-commerce platform that demonstrates how modern web technologies, databases, and AI can be combined to create a more intelligent and personalized shopping experience.

## Project Status

Currently under development. New features and improvements will be added as the project progresses.

## Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB database (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))

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
OPENAI_API_KEY=your_openai_api_key
```

Replace the values with your own MongoDB URI and OpenAI API key.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Seed the database

On first run the product list may be empty. Visit the seed endpoint to load sample products:

```
http://localhost:3000/api/seed
```

You should see:

```json
{ "message": "Database seeded successfully!" }
```

Refresh the home page to view the catalog.

> **Note:** The seed route clears all existing products before inserting samples. Use it only in development.

## Current Project Structure

```
mongo-ecom/
├── app/
│   ├── api/
│   │   ├── products/route.js   # GET /api/products
│   │   └── seed/route.js       # GET /api/seed
│   ├── globals.css
│   ├── layout.js
│   └── page.js                 # Product catalog
├── lib/
│   └── db.js                   # MongoDB connection
├── models/
│   └── Product.js              # Product schema
└── public/
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
