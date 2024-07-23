# 🚀 Awesome E-Commerce Project

Welcome to this exciting e-commerce project! 🛍️

## 👨‍💻 About the Developer

This project is brought to you by **Vaniah Ndungu**, a passionate full-stack MERN developer with a love for:

- 💻 Coding
- 🎵 Music
- 🏥 Medicine (Helping people)

## 🌟 Project Overview

This e-commerce application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and incorporates various modern technologies to provide a seamless shopping experience.

### 🔑 Key Features

- 🔐 User authentication
- 🛒 Product browsing and searching
- 🛍️ Shopping cart functionality
- 💳 Secure payment processing with Stripe
- 🖼️ Image uploads with Cloudinary
- 🚀 Fast performance with Redis caching
- 📊 Admin dashboard for comprehensive monitoring

## 🛠️ Technologies Used

### Backend

- Node.js with Express.js
- MongoDB for database
- Redis for caching
- TypeScript for type-safe code
- Stripe for payment processing
- Cloudinary for image management

### Frontend

- React.js with TypeScript
- Redux for state management
- React Router for navigation
- Suspense and lazy loading for performance optimization

## 🔍 Detailed Look at Key Files

### @server\src\routes\user.ts

This file defines the API routes for user-related operations:

- POST /api/v1/user/new: Create a new user
- GET /api/v1/user/all: Retrieve all users (admin only)
- GET /api/v1/user/:id: Get a specific user
- DELETE /api/v1/user/:id: Delete a user (admin only)

The file uses Express Router and implements middleware for admin-only routes.

### @server\src\app.ts

This is the main server file that:

- Sets up Express application
- Connects to MongoDB and Redis
- Configures Cloudinary and Stripe
- Defines API routes
- Implements error handling and CORS

### @client\src\App.tsx

This file is the main component of the React application:

- Implements routing using React Router
- Uses lazy loading and Suspense for performance optimization
- Manages user authentication state
- Implements protected routes for logged-in users and admin

## 🧠 Key Concepts and Technologies

### TypeScript

TypeScript is used throughout the project for its strong typing system, which helps catch errors early in development and improves code maintainability.

### Redis

Redis is used for caching, significantly improving the application's performance by reducing database queries for frequently accessed data.

### Admin Dashboard

The admin dashboard (/admin routes) provides comprehensive monitoring and management capabilities, including:

- Product management
- Customer overview
- Transaction monitoring
- Discount management
- Various charts for data visualization

### Lazy Loading and Suspense

These React features are used to improve initial load time by splitting the code into smaller chunks and loading them on demand.

### Protected Routes

The application implements protected routes to ensure that certain pages are only accessible to logged-in users or admins, enhancing security.

# Running the Application Locally

## Prerequisites

- Node.js (v14 or later)
- MongoDB account
- Redis account
- Stripe account
- Cloudinary account

## Setup

1. Clone the repository:

   git clone <repository-url>
   cd <project-directory>

2. Install dependencies:

   npm install
   cd client
   npm install
   cd ..

3. Set up environment variables:

   Create a `.env` file in the server directory with the following content:

   PORT=4000
   MONGO_URI=<your-mongodb-uri>
   REDIS_URI=<your-redis-uri>
   STRIPE_KEY=<your-stripe-secret-key>
   CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUD_API_KEY=<your-cloudinary-api-key>
   CLOUD_API_SECRET=<your-cloudinary-api-secret>
   CLIENT_URL=http://localhost:3000
   PRODUCT_PER_PAGE=8

   Create a `.env` file in the client directory with the following content:

   REACT_APP_API_URL=http://localhost:4000

   Replace the placeholder values with your actual credentials.

4. Start the server:

   npm run server

5. In a new terminal, start the client:

   cd client
   npm start

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Additional Notes

- Ensure that your MongoDB cluster is running and accessible.
- Make sure your Redis instance is active and reachable.
- Verify that your Stripe account is set up correctly for handling payments.
- Confirm that your Cloudinary account is properly configured for image uploads.

## Troubleshooting

- If you encounter any connection issues, double-check your environment variables and ensure they are correctly set.
- For any dependency-related errors, try deleting the `node_modules` folder and running `npm install` again in both the root and client directories.

## 🤝 Contributing

We welcome contributions! Feel free to open issues or submit pull requests.

## 📫 Contact

For any questions or feedback, please reach out to Vaniah Ndungu at Vaniah1 in github.

---

Happy coding and happy shopping! 🎉🛍️
