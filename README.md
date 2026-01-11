# Expense Manager

A sleek and modular React app for managing and visualizing expenses against a preset budget. 
Built with Vite for blazing-fast development and styled using Bootstrap.

## ✨ Features
- Add expenses with date, category, note, and amount
- View all expenses in a styled table with delete functionality
- See a real-time budget overview (initial, spent, remaining)
- Modular architecture with reusable components
- Responsive layout using Bootstrap
- Powered by Vite for instant startup and hot reloading

## 🛠️ Tech Stack
- React
- Vite
- Bootstrap (via utility classes)

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Elch-Clemens/expense-manager.git
cd expense-manager
```

### 2. Install Dependencies

```bash
npm install
```

> ⚠️ `node_modules` are not committed — make sure to run `npm install` before running the app.

### 3. Start the Development Server

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── App.jsx                  # Root layout with logo and header
├── ExpenseManager.jsx       # Central logic and state management
├── components/
│   ├── BudgetOverview.jsx   # Displays budget summary
│   ├── ExpenseForm.jsx      # Controlled form to add new expenses
│   ├── ExpenseTable.jsx     # Table view with expenses
│   └── DeleteExpense.jsx    # Confirmation button to remove an expense
├── data/
│   └── expenseData.js       # Contains initial budget and expenses
├── App.css                  # Custom styles + Bootstrap utility classes
└── main.jsx                 # App bootstrap entry point
```

---

## 🧩 Component Breakdown

- **App.jsx** – Root component, contains layout and branding
- **ExpenseManager.jsx** – Handles all logic: state, calculations, and component wiring
- **ExpenseForm.jsx** – Controlled form to add new expenses
- **ExpenseTable.jsx** – Displays expense list in a table
- **DeleteExpense.jsx** – Button with confirmation logic for deletion
- **BudgetOverview.jsx** – Shows total budget, spent, and remaining

---




