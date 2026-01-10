import DeleteExpense from './DeleteExpense';

function ExpenseTable({ expenses, onDelete}) {
    return (
        <div>
            <h2  className="fw-semibold pb-3">Expenses</h2>
            <table className="table table-striped table-bordered text-center">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Note</th>
                        <th>Amount (€)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.date}</td>
                        <td>{expense.category}</td>
                        <td>{expense.note}</td>
                        <td>{expense.amount}</td>
                        <td>
                            <DeleteExpense onConfirmDelete={() => onDelete(expense.id)} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseTable;