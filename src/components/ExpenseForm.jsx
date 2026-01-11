import {useState} from "react";
import {categories} from "../data/expenseData.js"

function ExpenseForm({onAdd}) {
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [note, setNote] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Date: ", date);
        console.log("Category: ", category);
        console.log("Note: ", note);
        console.log("Amount: ", amount);


        // unique IDs with timestamp, trim unifies input, parse in number
        const newExpense = {
            id: Date.now(),
            date,
            category: category.trim(),
            note: note.trim(),
            amount: parseFloat(amount),
        };

        onAdd(newExpense);

        // Reset fields
        setDate("");
        setCategory("");
        setNote("");
        setAmount("");
    };

    return (
        <div className="mt-2">
            <h2 className="fw-semibold">Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Select category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row p-1">
                    <div>
                        <button type="submit" className="btn btn-primary">
                            Add Expense
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;
