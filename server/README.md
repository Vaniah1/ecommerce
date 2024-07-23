# MERN E-Commerce Server

This repository contains the server-side code for a MERN (MongoDB, Express, React, Node.js) stack e-commerce application.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB

## Getting Started

Follow these steps to set up the project for local development:

1. Clone the repository:

   git clone https://github.com/your-username/mern-ecommerce-server.git
   cd server

2. Install dependencies:

   npm install

3. Create a `.env` file in the root directory and add the following environment variables:

   REDIS_URI=your_redis_uri
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   CLIENT_URL=http://localhost:3000

   Replace `your_database_name` with your desired database name and `your_stripe_secret_key` with your actual Stripe secret key.

4. Start the development server:

   npm run dev

The server should now be running on `http://localhost:4000`.

## Available Scripts

- `npm run dev`: Starts the development server with hot-reloading
- `npm run build`: Builds the TypeScript code
- `npm start`: Starts the production server

## API Endpoints

Document your API endpoints here. For example:

- `GET /api/products`: Fetch all products
- `POST /api/orders`: Create a new order
- ...

## Testing

To run tests do npm test

npm test

## Deployment

Add instructions for deploying the server to production.
