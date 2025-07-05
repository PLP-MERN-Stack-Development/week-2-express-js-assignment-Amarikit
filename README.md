#  Product API – Express.js RESTful API

This is a simple RESTful API built with Express.js for managing products.  
It supports full CRUD operations, middleware, error handling, filtering, pagination, and search functionality.

---

##  Features

- View all products
- Get a single product by ID
- Create a new product
- Update or delete an existing product
- Search products by name
- Filter by category and paginate results
- View product statistics
- Includes custom middleware (logger, authentication, validation)
- Proper error handling with custom error classes

---

##  Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/)

---

###  Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file:

Use the example provided:

bash
Copy
Edit
cp .env.example .env
Set your API key in .env (optional if using hardcoded key):

ini
Copy
Edit
API_KEY=my-secret-key
Start the server:

bash
Copy
Edit
node server.js
The server will start at:

arduino
Copy
Edit
http://localhost:3000
 API Endpoints
 Basic Routes
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product

 Advanced Features
Method	Endpoint	Description
GET	/api/products/search?name=	Search products by name
GET	/api/products?category=&page=&limit=	Filter and paginate
GET	/api/products/stats	Get product stats by category

 Authentication
Include the following header in POST, PUT, and DELETE requests:

vbnet
Copy
Edit
Key: x-api-key
Value: my-secret-key
🧾 Example Product JSON
json
Copy
Edit
{
  "name": "Tablet",
  "description": "10-inch Android tablet",
  "price": 350,
  "category": "electronics",
  "inStock": true
}
 Author
Victorine Amarikit
