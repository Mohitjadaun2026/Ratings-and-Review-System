# Ratings and Review System

This project is a web application that allows users to provide ratings and reviews for products listed on the page. It is built using React for the frontend and Node.js with Express for the backend, with MySQL as the database.

## Project Structure

```
Rating-Frontend
├── client
│   ├── public
│   │   └── index.html
│   └── src
│       ├── components
│       │   ├── ProductList.jsx
│       │   ├── ProductItem.jsx
│       │   ├── RatingForm.jsx
│       │   └── ReviewForm.jsx
│       ├── App.jsx
│       ├── index.js
│       └── styles
│           └── App.css
├── server
│   ├── controllers
│   │   ├── productController.js
│   │   └── reviewController.js
│   ├── models
│   │   ├── product.js
│   │   └── review.js
│   ├── routes
│   │   ├── productRoutes.js
│   │   └── reviewRoutes.js
│   ├── db.js
│   └── server.js
├── package.json
└── README.md
```

## Features

- Users can view a list of products with their ratings and reviews.
- Users can submit ratings and reviews for each product.
- The application displays the average rating and tagged reviews for each product.

## Getting Started

### Prerequisites

- Node.js
- MySQL

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd Rating-Frontend
   ```

3. Install the dependencies for both the client and server:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Set up the MySQL database and update the database connection details in `server/db.js`.

### Running the Application

1. Start the server:
   ```
   cd server
   node server.js
   ```

2. Start the client:
   ```
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Navigate through the product list.
- Click on a product to view its details.
- Use the rating and review forms to submit your feedback.

## License

This project is licensed under the MIT License.