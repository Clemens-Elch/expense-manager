import viteLogo from "../assets/vite.svg";
import ExpenseManager from "../ExpenseManager.jsx";

const Home = () => {
    return (
    <div className="container my-2">
        <div className="row justify-content-center">
            <div className=" app-container col-8 text-center">
                <div className="pt-4">
                    <img src={viteLogo} className="logo" alt="Vite Logo"/>
                </div>
                <h1 className="fw-bold p-1">Expense Manager</h1>
                <ExpenseManager/>
            </div>
        </div>
    </div>
    )
};

export default Home;

