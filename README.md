# BuyTech

An e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js) with JWT Authentication and REST API integration.

## Authors

- [@dhruv70441](https://github.com/dhruv70441)

## Demo

[https://buytech.netlify.app/](https://buytech.netlify.app/)

## Features

- User authentication with JWT (Login & Registration)
- Secure backend API with Express and MongoDB
- React Context API for state management
- axios for backend communication

## Technologies Used

- **Frontend:** React, Context API, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT Authentication

## Installation

### Clone the repository

```bash
git clone https://github.com/dhruv70441/buyTech.git
cd buyTech
```

## Backend Setup

1] Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

2] Create a `.env` file:
```plaintext
PORT=<PORT number>
MONGO_URI=<Your MongoDB URL>
DB_NAME=<Your Database name>
SECRET_KEY=<Your JWT SECRET_KEY>
```

3] Start the backend server:
```bash
npm run dev
```

## Frontend Setup

1] Navigate to the frontend folder and install dependencies:
```bash
cd client
npm install
```

2] Start the frontend server:
```bash
npm start
```

3] Create a `.env` file:
```
VITE_API_URL=<You backend URL>
```

