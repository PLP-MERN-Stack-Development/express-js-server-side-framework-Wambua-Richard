🚂 Week 2: Express.js – Server-Side Framework
🚀 Objective

Build a RESTful API using Express.js that implements standard CRUD operations, proper routing, middleware functionality, error handling, and advanced features like filtering, pagination, and statistics.

📂 Tasks
🧩 Task 1: Express.js Setup

Initialize a new Node.js project:

npm init -y


Install Express.js and dependencies:

npm install express


Create a basic Express server that listens on port 3000.

Implement a "Hello World" route at the root endpoint (/).

🧱 Task 2: RESTful API Routes

Created a resource called products with the following fields:

Field	Type	Description
id	Number	Unique identifier
name	String	Product name
description	String	Product description
price	Number	Product price
category	String	Product category
inStock	Boolean	Product availability
Implemented Routes:
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get a specific product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update an existing product
DELETE	/api/products/:id	Delete a product
⚙️ Task 3: Middleware Implementation
✅ Logger Middleware

Logs the request method, URL, and timestamp for every incoming request.

✅ JSON Parser

Uses express.json() to parse JSON request bodies.

✅ Authentication Middleware

Checks for a valid API key in the request header (x-api-key) before allowing access.

✅ Validation Middleware

Ensures required fields (name, description, price, category) are provided during product creation or update.

⚠️ Task 4: Error Handling
🧰 Implemented Features:

Global Error Handler: Catches all application errors and sends structured JSON responses.

Custom Error Classes:

AppError – Base error class

NotFoundError – Missing resource errors

ValidationError – Invalid input data

UnauthorizedError – Authentication failures

Asynchronous Error Handling: Managed using try/catch blocks and a reusable async wrapper function.

Example Error Response:
{
  "status": "error",
  "message": "Product not found"
}

⚡ Task 5: Advanced Features
Feature	Description	Example
Filtering	Filter products by category	/api/products?category=Food
Pagination	Paginate product list using page & limit	/api/products?page=1&limit=2
Search	Search products by name	/api/products?name=honey
Statistics	Get total product count by category	/api/products/stats/data
🧪 Expected Outcome

By the end of this project, you should have:

A fully functional Express.js API with CRUD operations.

Cleanly structured middleware for logging, authentication, and validation.

Centralized error handling with meaningful status codes.

Extended features for filtering, pagination, and analytics.

🛠️ Setup Instructions
1️⃣ Prerequisites

Ensure Node.js (v18 or higher) is installed:

node -v
npm -v

2️⃣ Project Initialization

Clone or create your project folder and navigate to it:

git clone https://github.com/PLP-MERN-Stack-Development/express-js-server-side-framework-Wambua-Richard.git
cd express-api


Initialize Node.js:

npm init -y


Install dependencies:

npm install express

3️⃣ Project Structure
express-api/
│
├── server.js       # Main application entry
├── routes.js       # Handles all product routes
├── models.js       # Product model and data functions
├── config.js       # Configuration file (port, API key)
└── README.md       # Documentation

4️⃣ Configuration (config.js)

Example:

const config = {
  PORT: 3000,
  MONGO_URI: 'mongodb+srv://wambuarichard335_db_user:RichAtlas@96@cluster0.94glyro.mongodb.net/rich_expressjs?retryWrites=true&w=majority&appName=Cluster0'
};
module.exports = config;

5️⃣ Running the Server

Start your Express server:

node server.js


You should see:

🚀 Server running on http://localhost:3000

📡 API Documentation
🔹 Base URL
http://localhost:3000/api/products

🔸 Headers
x-api-key: mongodb+srv://wambuarichard335_db_user:RichAtlas@96@cluster0.94glyro.mongodb.net/rich_expressjs?retryWrites=true&w=majority&appName=Cluster0
Content-Type: application/json

🔸 Endpoints
Method	Endpoint	Description	Example Request	Example Response
GET	/api/products	Get all products	/api/products	[ { "id": 1, "name": "Honey Jar" }, ... ]
GET	/api/products/:id	Get product by ID	/api/products/1	{ "id": 1, "name": "Honey Jar" }
POST	/api/products	Create new product	{ "name": "Candle", "description": "Beeswax candle", "price": 10, "category": "Home", "inStock": true }	{ "id": 173420...", "name": "Candle" }
PUT	/api/products/:id	Update existing product	{ "price": 12 }	{ "id": 1, "price": 12 }
DELETE	/api/products/:id	Delete product	/api/products/1	{ "message": "Product deleted successfully" }
GET	/api/products?category=Food	Filter by category	/api/products?category=Food	[ { "name": "Honey Jar" } ]
GET	/api/products?name=honey	Search products by name	/api/products?name=honey	[ { "name": "Honey Comb" } ]
GET	/api/products?page=1&limit=2	Paginate results	/api/products?page=1&limit=2	[ { "name": "Honey Jar" }, { "name": "Beeswax Candle" } ]
GET	/api/products/stats/data	Product statistics	/api/products/stats/data	{ "Food": 2, "Home": 1, "Health": 2 }
⚙️ Example Usage (via curl)
GET all products
curl -H "x-api-key: mongodb+srv://wambuarichard335_db_user:RichAtlas@96@cluster0.94glyro.mongodb.net/rich_expressjs?retryWrites=true&w=majority&appName=Cluster0" http://localhost:3000/api/products

POST new product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "x-api-key: 12345" \
  -d '{"name":"Honey Comb","description":"Raw honey comb","price":20,"category":"Food","inStock":true}'

GET product statistics
curl -H "x-api-key: mongodb+srv://wambuarichard335_db_user:RichAtlas@96@cluster0.94glyro.mongodb.net/rich_expressjs?retryWrites=true&w=majority&appName=Cluster0" http://localhost:3000/api/products/stats/data

🧰 .env.example

(For future use if you decide to use environment variables)

PORT=3000
MONGO_URI=mongodb+srv://wambuarichard335_db_user:RichAtlas@96@cluster0.94glyro.mongodb.net/rich_expressjs?retryWrites=true&w=majority&appName=Cluster0

✅ Submission Instructions

Accept the GitHub Classroom assignment invitation.

Clone your personal repository created by GitHub Classroom.

Add the following files to your repository:

server.js, routes.js, models.js, config.js

README.md and .env.example

Commit and push your work:

git add .
git commit -m "Completed Express.js API Project"
git push origin main


Ensure your project runs correctly before submission.

🧠 Learning Outcomes

By completing this project, you will:

Understand Express.js fundamentals

Design and test RESTful APIs

Use middleware for logging, authentication, and validation

Implement global error handling

Add advanced API features like filtering, pagination, and statistics

Prepare for database integration (MongoDB) in upcoming modules