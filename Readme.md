# 🚀 Awesome E-Commerce Project

Welcome to this exciting e-commerce project! 🛍️

## 👨‍💻 About the Developer

This project is brought to you by **Vaniah Ndungu**, a passionate junior full-stack web developer with a passion for:

- 💻 Coding
- 🎵 Music
- 🏥 Medicine

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
- SCSS for advanced styling

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

### SCSS (Sass)

SCSS is used instead of regular CSS for its advanced features and benefits:

- Nesting: Allows for more organized and readable stylesheets
- Variables: Enables easy management of colors, fonts, and other repeated values
- Mixins: Promotes reusability of style blocks
- Functions: Provides ability to compute and manipulate values
- Partials: Allows splitting styles into smaller, more manageable files
- Inheritance: Enables extending styles from one selector to another

SCSS brings several advantages to the codebase:

- Improved maintainability: Easier to organize and update styles
- Enhanced productivity: Less repetition and more efficient styling
- Better code structure: Clearer hierarchy and relationships between elements
- Easier theming: Variables make it simple to change global styles
- Advanced features: Like loops and conditionals for more dynamic styling

### Docker Configuration

#### @client\Dockerfile

This Dockerfile is used for production deployment:

- Uses Node.js 20 as the base image
- Sets up the working directory
- Copies package files and installs dependencies
- Copies the entire project and builds it
- Runs the preview command for production serving

#### @client\Dockerfile.dev

This Dockerfile is used for development:

- Uses Node.js 20 as the base image
- Sets up the working directory
- Copies package files and installs dependencies
- Copies the entire project
- Runs the development server

These Dockerfiles enable:

- Consistent development environments across different machines
- Easy deployment and scaling of the application
- Isolation of the application and its dependencies
- Simplified CI/CD processes

# Running the Application Locally

## Prerequisites

- Node.js (v14 or later)
- MongoDB account
- Redis account
- Stripe account
- Cloudinary account
- Firebase account

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

   VITE_FIREBASE_KEY=<your-firebase-key>
   VITE_AUTH_DOMAIN=<your-firebase-auth-domain>
   VITE_PROJECT_ID=<your-firebase-project-id>
   VITE_STORAGE_BUCKET=<your-firebase-storage-bucket>
   VITE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
   VITE_APP_ID=<your-firebase-app-id>
   VITE_SERVER=http://localhost:4000
   VITE_STRIPE_KEY=<your-stripe-publishable-key>

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
- Set up your Firebase project and obtain the necessary credentials.

## Troubleshooting

- If you encounter any connection issues, double-check your environment variables and ensure they are correctly set.
- For any dependency-related errors, try deleting the `node_modules` folder and running `npm install` again in both the root and client directories.

## 🌟 Project Highlights

This e-commerce project stands out with its modern tech stack and user-friendly features:

1. 🔒 **Secure Authentication**: Utilizes Firebase for robust user authentication.
2. 🎨 **Sleek UI**: Built with React and styled for an intuitive shopping experience.
3. 🚀 **High Performance**: Implements Redis caching for lightning-fast data retrieval.
4. 📊 **Comprehensive Admin Panel**: Provides powerful tools for managing products, orders, and analytics.
5. 💳 **Seamless Payments**: Integrates Stripe for secure and easy transactions.
6. 📸 **Dynamic Image Management**: Uses Cloudinary for efficient image uploads and storage.
7. 📱 **Responsive Design**: Ensures a great shopping experience across all devices.

## 🤝 Contributing

We welcome contributions! Feel free to open issues or submit pull requests. Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🌐 Social Media

For any questions or feedback, please reach out to Vaniah Ndungu:

- GitHub: [Vaniah1](https://github.com/Vaniah1)

---

Happy coding and happy shopping! 🎉🛍️
