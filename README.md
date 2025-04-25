## 📋 User Feedback System

This is a full-stack application to collect and display user feedback.

## 🛠 Features

- Submit user feedback (name, email, feedback text)
- View all feedbacks on a dashboard
- **Sort feedbacks by newest or oldest**
- **Filter feedbacks using name and email (partial matches supported)**
- Responsive feedback list displayed in a **Bootstrap-styled table**
- Toast notifications for feedback submission and errors
- Organized frontend with routing and modular structure

---

## 🧰 Technologies Used

| Layer    | Tech Stack                                            |
| -------- | ----------------------------------------------------- |
| Frontend | React, React Router, Axios, Bootstrap, React Toastify |
| Backend  | Node.js, Express.js                                   |
| Database | MongoDB with Mongoose                                 |

---

## 🚀 How to Run Locally

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or provide a connection string (MongoDB Atlas or local URI)

---

### 🔌 Backend Setup

1. Navigate to the `feedback-backend` folder:

```bash
cd feedback-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend directory and add your MongoDB URI:

```env
MONGODB_URI=mongodb://localhost:27017/feedbackDB
PORT=5000
```

4. Start the server:

```bash
npm start
```

The backend will run at `http://localhost:5000`.

---

### 🌐 Frontend Setup

1. Navigate to the `feedback-frontend` folder:

```bash
cd feedback-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React app:

```bash
npm start
```

The frontend will run at `http://localhost:3000` (or another available 3XXX port).

---

## 🌍 App URLs

| Function        | URL                             |
| --------------- | ------------------------------- |
| Submit Feedback | http://localhost:3000/          |
| View Feedbacks  | http://localhost:3000/dashboard |

---

## ✅ API Endpoints

| Method | Endpoint                | Description                                |
| ------ | ----------------------- | ------------------------------------------ |
| POST   | /feedback               | Submit a new feedback                      |
| GET    | /feedback?sort=desc/asc&name=abc&email=xyz | Get feedbacks (sorted + filtered) |

✅ `name` and `email` query parameters support **partial, case-insensitive matches**.

---