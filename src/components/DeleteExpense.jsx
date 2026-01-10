import { useState } from "react";

function DeleteExpense({ onConfirmDelete }) {
    const [isConfirming, setIsConfirming] = useState(false);

    const handleClick = () => setIsConfirming(true);
    const handleCancel = () => setIsConfirming(false);
    const handleConfirm = () => {
        onConfirmDelete();
        setIsConfirming(false);
    };

    return (
        <div>
            {!isConfirming ? (
                <button
                    className="btn btn-sm btn-warning"
                    onClick={handleClick}
                >
                    Delete Expense
                </button>
            ) : (
                <div>
                    <p className="text-danger mb-1">Delete this entry?</p>
                    <div className="d-flex gap-2 justify-content-center">
                        <button className="btn btn-sm btn-danger" onClick={handleConfirm}>
                            Yes
                        </button>
                        <button
                            className="btn btn-sm btn-dark"
                            onClick={handleCancel}
                        >
                            No
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DeleteExpense;
