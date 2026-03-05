# 🧑‍💼 EmpTrack — Employee Management System

A modern, responsive **Employee Management System** built with React, Redux Toolkit, and MockAPI. Supports full CRUD operations, favorites, image preview, and modal-based interactions.

---

## 🚀 Live Demo

[🔗 https://emptrack.vercel.app](https://emptrack.vercel.app)

---

## 📸 Screenshots

> Add screenshots here

---

## ✨ Features

- 📋 **View Employees** — List all employees with name, email, bio, and profile image
- ➕ **Add Employee** — Create a new employee via a popup form
- ✏️ **Edit Employee** — Update employee details inline via modal
- 🗑️ **Delete Employee** — Remove an employee with a confirmation popup
- ❤️ **Favorite** — Mark/unmark employees as favorites
- 🖼️ **Image Preview** — Click profile image to open full-size preview
- ⚡ **Real-time State** — Redux Toolkit manages all async operations with loading & error states
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI Library |
| [Redux Toolkit](https://redux-toolkit.js.org/) | State Management |
| [React Redux](https://react-redux.js.org/) | React-Redux binding |
| [Axios](https://axios-http.com/) | HTTP Client |
| [MockAPI](https://mockapi.io/) | Fake REST API / Backend |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [DaisyUI](https://daisyui.com/) | UI Component Library |
| [Lucide React](https://lucide.dev/) | Icons |
| [Vite](https://vitejs.dev/) | Build Tool |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── feauture/
│   │   ├── Employee/
│   │   │   ├── employee.slice.js      # Redux slice (state, reducers, extraReducers)
│   │   │   └── employee.thunk.js      # Async thunks (GET, POST, PUT, DELETE)
│   │   └── popup/
│   │       └── popup.slice.js         # Popup open/close state management
│   └── store.js                       # Redux store configuration
├── assets/                            # Static assets
├── components/
│   ├── Employee/
│   │   ├── Employee.jsx               # Employee list container
│   │   └── EmployeeCard.jsx           # Individual employee card
│   ├── foooter/                       # Footer component
│   ├── navbar/                        # Navbar component
│   └── popup/
│       ├── DltPopup.jsx               # Delete confirmation modal
│       ├── EmployeePopup.jsx          # Add/Edit employee modal
│       └── ImagePopup.jsx             # Profile image preview modal
├── config/
│   └── axois.instance.js              # Axios base config
└── pages/
    └── Home.jsx                       # Main page
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SyntaxAdil/EmpTrack-Employee-Management-System.git

# 2. Navigate into the project
cd EmpTrack-Employee-Management-System

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will run at `http://localhost:5173`

---

## 🌐 API

This project uses **[MockAPI](https://mockapi.io/)** as a fake backend.

Base URL:
```
https://69a8b96832e2d46caf445067.mockapi.io/
```

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/employees` | Fetch all employees |
| `POST` | `/employees` | Add a new employee |
| `PUT` | `/employees/:id` | Update an employee |
| `DELETE` | `/employees/:id` | Delete an employee |

### Employee Object Schema

```json
{
  "employee_id": "1",
  "employee_name": "John Doe",
  "employee_email": "john@example.com",
  "employee_bio": "Frontend Developer",
  "profile_url": "https://...",
  "is_favorite": false
}
```

---

## 🔄 Redux State Shape

```js
{
  employee: {
    employee: [],      // Array of employee objects
    isLoading: false,  // Loading state for async ops
    error: null        // Error message if any
  },
  popup: {
    employeePopUp: null,   // Employee data for edit/add modal
    dltPopUp: null,        // Employee ID for delete confirmation
    imgPopUp: null         // Image URL for preview modal
  }
}
```

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 🔮 Roadmap

- [ ] Migrate from MockAPI to Firebase Firestore
- [ ] Add Authentication (Login / Signup)
- [ ] Search & Filter employees
- [ ] Pagination or infinite scroll
- [ ] Department/Role management
- [ ] Dark mode toggle

---

## 👨‍💻 Author

**Adil** — [@SyntaxAdil](https://github.com/SyntaxAdil)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).