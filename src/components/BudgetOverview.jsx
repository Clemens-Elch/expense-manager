
function BudgetOverview({initialBudget, totalSpent, remainingBudget}) {
    return (
        <div className="mt-3">
            <h2 className="pb-2 fw-semibold">Budget Overview</h2>
            <p className="p-1">Initial Budget: {initialBudget}€</p>
            <p className="p-1">Total Spent: {totalSpent}€</p>
            <p className="p-1 remaining-budget fw-bold">Remaining Budget: {remainingBudget}€</p>
        </div>
    );
}

export default BudgetOverview;
