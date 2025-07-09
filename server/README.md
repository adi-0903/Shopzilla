# Myntra Clone Backend Server

A complete Node.js/Express backend server for the Myntra clone e-commerce application with MongoDB database integration.

## 🚀 Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Product Management**: CRUD operations with search, filtering, and pagination
- **Shopping Cart**: Add, update, remove items with size/color variants
- **Order Management**: Complete order processing workflow with status tracking
- **Wishlist**: Save and manage favorite products
- **User Profiles**: Manage user information, addresses, and preferences
- **Reviews & Ratings**: Product review system with helpful votes
- **Admin Panel**: Admin-only routes for managing products and orders
- **Security**: Rate limiting, CORS, input validation, helmet protection
- **Database**: MongoDB with Mongoose ODM

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Step 1: Install Dependencies
\`\`\`bash
cd server
npm install
\`\`\`

### Step 2: Environment Configuration
Create a `.env` file in the server directory:
\`\`\`env
# Database
MONGODB_URI=mongodb://localhost:27017/myntra-clone

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-make-it-long-and-random
JWT_EXPIRE=7d

# Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Optional: Cloud Services
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Optional: Email Service
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Optional: Payment Gateway
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
\`\`\`

### Step 3: Database Setup

**Option A: Local MongoDB**
\`\`\`bash
# Install MongoDB locally
# Windows (Chocolatey): choco install mongodb
# macOS (Homebrew): brew install mongodb-community
# Ubuntu: sudo apt install mongodb

# Start MongoDB service
mongod
\`\`\`

**Option B: MongoDB Atlas (Recommended)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env` file

### Step 4: Seed Database (Optional)
\`\`\`bash
npm run seed
\`\`\`
This creates sample products and an admin user:
- Email: `admin@myntraclone.com`
- Password: `admin123`

### Step 5: Start Server
\`\`\`bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
\`\`\`

Server will start on `http://localhost:5000`

## 🛠️ API Documentation

### Base URL
\`\`\`
http://localhost:5000/api
\`\`\`

### Authentication Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/auth/register` | Register new user | Public |
| POST | `/auth/login` | Login user | Public |
| GET | `/auth/me` | Get current user | Private |
| PUT | `/auth/profile` | Update user profile | Private |

### Product Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/products` | Get all products (with filters) | Public |
| GET | `/products/:id` | Get single product | Public |
| GET | `/products/category/:category` | Get products by category | Public |
| POST | `/products` | Create product | Admin |
| PUT | `/products/:id` | Update product | Admin |
| DELETE | `/products/:id` | Delete product | Admin |

### Cart Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/cart` | Get user's cart | Private |
| POST | `/cart/add` | Add item to cart | Private |
| PUT | `/cart/update/:itemId` | Update cart item | Private |
| DELETE | `/cart/remove/:itemId` | Remove item from cart | Private |
| DELETE | `/cart/clear` | Clear entire cart | Private |

### Order Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/orders` | Create new order | Private |
| GET | `/orders` | Get user's orders | Private |
| GET | `/orders/:id` | Get order by ID | Private |
| PUT | `/orders/:id/pay` | Update order payment | Private |
| PUT | `/orders/:id/status` | Update order status | Admin |
| GET | `/orders/admin/all` | Get all orders | Admin |

### Wishlist Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/wishlist` | Get user's wishlist | Private |
| POST | `/wishlist/add` | Add item to wishlist | Private |
| DELETE | `/wishlist/remove/:productId` | Remove from wishlist | Private |
| DELETE | `/wishlist/clear` | Clear wishlist | Private |

### Review Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/reviews/product/:productId` | Get product reviews | Public |
| POST | `/reviews` | Create review | Private |
| PUT | `/reviews/:id` | Update review | Private |
| DELETE | `/reviews/:id` | Delete review | Private |
| PUT | `/reviews/:id/helpful` | Mark review helpful | Private |

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

\`\`\`javascript
Authorization: Bearer <your-jwt-token>
\`\`\`

## 📊 Database Models

### User Model
- Personal information (name, email, phone)
- Authentication credentials (hashed password)
- Multiple addresses with types (home, work, other)
- User preferences and settings
- Role-based access (user/admin)

### Product Model
- Product details (name, description, price)
- Brand and category information
- Multiple images with Cloudinary integration
- Color and size variants
- Stock management
- Ratings and review counts
- Search indexing

### Order Model
- User and order information
- Order items with product details
- Shipping address
- Payment method and status
- Order status tracking
- Delivery information

### Cart Model
- User's shopping cart
- Items with quantities and variants
- Automatic total calculations

### Wishlist Model
- User's saved products
- Easy add/remove functionality

### Review Model
- Product reviews and ratings
- User verification
- Helpful vote system

## 🛡️ Security Features

- **Rate Limiting**: Prevents API abuse (100 requests per 15 minutes)
- **CORS**: Cross-origin resource sharing configuration
- **Helmet**: Security headers for protection
- **Input Validation**: Request validation using express-validator
- **Password Hashing**: bcrypt encryption for passwords
- **JWT Authentication**: Secure token-based authentication
- **Role-based Access**: Admin and user role separation

## 🚀 Deployment

### Environment Variables for Production
\`\`\`env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
FRONTEND_URL=your-production-frontend-url
\`\`\`

### Build and Deploy
\`\`\`bash
npm start
\`\`\`

## 📝 API Response Format

### Success Response
\`\`\`json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... },
  "count": 10,
  "total": 100,
  "totalPages": 10,
  "currentPage": 1
}
\`\`\`

### Error Response
\`\`\`json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Please enter a valid email"
    }
  ]
}
\`\`\`

## 🧪 Testing the API

### Health Check
\`\`\`bash
curl http://localhost:5000/api/health
\`\`\`

### Get Products
\`\`\`bash
curl http://localhost:5000/api/products
\`\`\`

### Register User
\`\`\`bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
\`\`\`

## 📞 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env`
   - Verify network connectivity

2. **JWT Token Issues**
   - Check JWT_SECRET in environment
   - Verify token format in requests
   - Ensure token hasn't expired

3. **CORS Errors**
   - Update FRONTEND_URL in `.env`
   - Check allowed origins in server.js

4. **Port Already in Use**
   - Change PORT in `.env` file
   - Kill existing processes on port 5000

### Logs and Debugging
- Check server console for error messages
- Enable detailed logging in development
- Use MongoDB Compass for database inspection

## 🔄 Updates and Maintenance

### Keep Dependencies Updated
\`\`\`bash
npm update
npm audit fix
\`\`\`

### Database Backup
\`\`\`bash
mongodump --uri="your-mongodb-uri"
\`\`\`

## 📈 Performance Optimization

- Database indexing for search queries
- Pagination for large datasets
- Image optimization with Cloudinary
- Caching strategies for frequently accessed data
- Connection pooling for database

---

**Happy Coding! 🎉**

For support and questions, please check the server logs and ensure all environment variables are properly configured.
