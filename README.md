# Food Ordering Web App (MERN Stack)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Contact](#contact)

## Introduction
This is a full-stack food ordering web application built using the MERN stack (MongoDB, Express, React, Node.js). The application consists of a customer-facing app for ordering food and an admin app for managing orders, menu items, and more.

## Features
- User authentication and authorization
- Browse food items
- Add items to the cart and place orders
- Stripe Payment Integration: Secure and reliable payment processing using Stripe.
- Order tracking
- Admin panel to manage menu items, orders

## Technologies Used
- **Frontend:** React.js, React Context API, React Router
- **Backend:** Node.js, Express.js
- **Payment Gateway:** Stripe
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS

## Installation
### Prerequisites
- Node.js
- MongoDB

### Clone the Repository
```sh
git clone https://github.com/bala0428/mern-food-delivery-app.git
cd mern-food-delivery-app
```

## Backend Setup
Navigate to the backend directory:

```sh
cd backend

```
Install dependencies:

```sh
npm install
```

Create a .env file in the backend directory and add the following:

```sh
JWT_SECRET="random#secret"
STRIPE_SECRET_KEY="sk_test_51JhWAiRXoTvIuM91beRv8XldfL3GGKyuLhzabkSwNeIXryY51G9UKnwNUFcotg0N6k4UAGhiprjJd4XhAF85JCN4004TC42zkl"
```

Start the backend server:

```sh
npm run server
```
## Frontend Setup
Navigate to the frontend directory:

```sh

cd frontend
```

Install dependencies:
```sh

npm install
```

Start the frontend server:
```sh

npm run dev
```

## Admin App Setup

Navigate to the admin directory:
```sh

cd admin
```

Install dependencies:

```sh
npm install
```

Start the admin app :
```sh
npm start
```

## Usage
Access the customer-facing app at http://localhost:5173.
Access the admin app at http://localhost:5174.
Register as a new user or log in with existing credentials.
Browse the menu, add items to the cart, and place an order.
Pay using dummy visa card
Use the admin panel to manage orders, menu items.

## Screenshots
![Screenshot_14-12-2024_115455_localhost](https://github.com/user-attachments/assets/bf639852-ded3-4ae1-8915-db61287c489e)
![Screenshot_14-12-2024_115432_localhost](https://github.com/user-attachments/assets/31d66ba5-3a7e-4898-8fc9-97a18681e8ad)
![Screenshot_14-12-2024_115038_localhost](https://github.com/user-attachments/assets/5c8de01c-15e6-4208-8429-bb82a398d402)
![Screenshot_14-12-2024_115245_localhost](https://github.com/user-attachments/assets/38d67ce2-f6ae-462d-9603-5a332d9c35bf)
![Screenshot_14-12-2024_123016_localhost](https://github.com/user-attachments/assets/d1d31a16-8ca5-476e-9af4-b97078359200)
![Screenshot_14-12-2024_115343_localhost](https://github.com/user-attachments/assets/7e28bdda-7ffe-422b-85ae-fa6aea9b4f23)
![Screenshot_14-12-2024_11540_localhost](https://github.com/user-attachments/assets/115b6675-e41b-4916-9f1a-ae92ee5400b7)
![Screenshot_14-12-2024_122612_localhost](https://github.com/user-attachments/assets/77647e43-1239-4a98-954c-a9712f1159f9)
![Screenshot_14-12-2024_122628_localhost](https://github.com/user-attachments/assets/42b84d29-d019-4d71-acf1-17e2d670ea84)
![Screenshot_14-12-2024_122752_localhost](https://github.com/user-attachments/assets/2fe7fab7-f7c2-4213-915c-bb15ee4a9b34)

## ADMIN PANEL
![Screenshot_28-12-2024_22014_localhost](https://github.com/user-attachments/assets/c4633dd0-2d84-44cd-85e7-a940e71cb2a0)
![Screenshot_28-12-2024_22039_localhost](https://github.com/user-attachments/assets/e3f1ba5b-ba63-444a-b6db-a793696380dc)
![Screenshot_28-12-2024_22053_localhost](https://github.com/user-attachments/assets/a2778854-7f18-4077-becf-9914fb4de96e)



## API Documentation
The API endpoints for the backend can be documented using tools like Postman or Swagger. Include endpoints for user authentication, menu items, orders, and more.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include relevant tests.

Happy coding!

Feel free to customize this template according to your specific project details and requirements.





# mern-food-delivery-app
