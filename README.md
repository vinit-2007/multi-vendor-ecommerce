🛒 Multi-Vendor E-Commerce Platform

A full-stack Multi-Vendor E-Commerce Platform built using React, Vite, Tailwind CSS, and Node.js. The platform provides separate dashboards and workflows for Customers, Vendors, and Administrators, enabling seamless online shopping and efficient store management.

🚀 Features
👤 Customer Storefront
Browse and explore available products.
View detailed product information.
Add and remove products from the shopping cart.
Manage cart quantities.
Secure checkout and payment integration.
View order history and track purchases.
User authentication and profile management.
🏪 Vendor Dashboard
Dedicated vendor dashboard.
Add and manage products.
Upload product images using Cloudinary.
View and manage vendor-specific products.
Track incoming customer orders.
Monitor store performance and sales.
🛡️ Admin Dashboard
Centralized admin dashboard.
Manage registered users.
Manage and monitor vendors.
View and manage all platform products.
Monitor overall platform activity and statistics.
🔐 Authentication & Security
User registration and login.
Role-based access control.
Customer, Vendor, and Admin authorization.
Protected frontend routes.
Backend authentication middleware.
💳 Third-Party Integrations
MongoDB: Database management.
Cloudinary: Product image storage and hosting.
Razorpay: Online payment integration.
🛠️ Tech Stack
Technology	Purpose
React.js	Frontend development
Vite	Frontend build tool
Tailwind CSS	UI styling
Node.js	Backend runtime
Express.js	Backend framework
MongoDB	Database
Axios	API communication
Context API	Global state management
Cloudinary	Image hosting
Razorpay	Payment gateway
JWT	Authentication
📁 Project Structure
text
multi-vendor-ecommerce/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── services/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── cart/
│   │   ├── orders/
│   │   ├── payment/
│   │   ├── products/
│   │   └── vendor/
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── utils/
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md

⚙️ Installation & Setup

Follow these steps to run the project locally.

1. Clone the Repository
bash
git clone https://github.com/vinit-2007/multi-vendor-ecommerce.git


Navigate to the project directory:

bash
cd multi-vendor-ecommerce

2. Backend Setup

Navigate to the backend folder:

bash
cd backend


Install dependencies:

bash
npm install


Create a .env file inside the backend directory.

Add the required environment variables:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret


Replace the placeholder values with your actual credentials.

Start the backend server:

bash
npm run dev


Or, if your project uses a start script:

bash
npm start

3. Frontend Setup

Open a new terminal and navigate to the frontend directory:

bash
cd frontend


Install dependencies:

bash
npm install


If your frontend uses an environment variable for the backend API URL, create a .env file inside frontend:

env
VITE_API_URL=http://localhost:5000


Start the frontend development server:

bash
npm run dev

4. Open the Application

Once both servers are running, open the frontend URL shown in your terminal. With the default Vite configuration, it is usually:

text
http://localhost:5173

🔑 User Roles

The platform supports three different user roles:

Role	Access
Customer	Browse products, manage cart, checkout, and view orders
Vendor	Manage products, view vendor orders, and monitor performance
Admin	Manage users, vendors, products, and platform activities
🔌 Integrations
MongoDB

Used to store application data, including users, products, carts, and orders.

Cloudinary

Used for uploading and hosting product images.

Razorpay

Used for integrating online payment functionality.

🔒 Environment Variables & Security
Never upload .env files to GitHub.
Keep database credentials and API secrets private.
Use environment variables for sensitive configuration.
Add .env to your .gitignore file.
Validate and authorize sensitive backend operations.
🧑‍💻 Development

Run the backend and frontend in separate terminals.

Backend:

bash
cd backend
npm run dev


Frontend:

bash
cd frontend
npm run dev

🚧 Future Improvements
Product reviews and ratings.
Wishlist functionality.
Advanced product filtering and search.
Vendor analytics and sales reports.
Order status notifications.
Improved mobile responsiveness.
Email notifications.
Deployment and production optimization.
👨‍💻 Author

Vinit

GitHub: @vinit-2007

Project Repository: Multi-Vendor E-Commerce Platform

⭐ Support

If you find this project useful or interesting, consider giving it a ⭐ on GitHub!

Built with ❤️ using React, Node.js, and MongoDB.
