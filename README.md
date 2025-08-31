# MERN Authentication App

A full-stack authentication application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- Form validation
- Modern UI with React

## Project Structure

```
auth-mern-app/
├── backend/          # Express.js server
│   ├── Controllers/  # Route controllers
│   ├── Middlewares/  # Authentication middleware
│   ├── Models/       # Database models
│   └── Routes/       # API routes
└── frontend/         # React.js client
    ├── pages/        # React components
    └── src/          # Source files
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repository-url>
cd auth-mern-app
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Set up environment variables
   - Create a `.env` file in the backend directory
   - Add your MongoDB connection string and JWT secret

5. Run the application

   **Backend:**
   ```bash
   cd backend
   npm start
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm start
   ```

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT
- **Frontend:** React.js, CSS3
- **Authentication:** JWT (JSON Web Tokens)

## License

This project is licensed under the MIT License.
