import {useState} from "react";
import {initialBudget, initialExpense} from "./data/expenseData.js";
import BudgetOverview from "./components/BudgetOverview.jsx";
import ExpenseTable from "./components/ExpenseTable.jsx";
import ExpenseForm from "./components/ExpenseForm.jsx";

function ExpenseManager() {

    const [expense, setExpense] = useState(initialExpense);

    // Add new expense from form to table
    const handleAdd = (newExpense) => {
        setExpense((prev) => [...prev, newExpense]);
    };

    //Deletes expense from table
    const onDelete = (idToDelete) => {
        setExpense((prev) =>
            prev.filter((expense) => expense.id !== idToDelete)
        );
    };




// Calculate for overview
    const calculateTotalSpent = (expenseData) => {
        return expenseData.reduce((sum, expense) => sum + expense.amount, 0);
    };

    const totalSpent = calculateTotalSpent(expense);
    const remainingBudget = initialBudget - totalSpent;

    return (
        <div className="expenseManager-container">
            <div className="mb-3">
                <BudgetOverview
                    initialBudget={initialBudget}
                    totalSpent={totalSpent}
                    remainingBudget={remainingBudget}
                />
            </div>
            <div>
                <ExpenseForm onAdd={handleAdd}/>
            </div>
            <div className="p-2">
                <ExpenseTable expenses={expense} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default ExpenseManager;
