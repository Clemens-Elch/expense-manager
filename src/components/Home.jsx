import ExpenseManager from "../ExpenseManager.jsx";

const Home = ({categories}) => {
    return (
        <div className="container my-2">
            <div className="row justify-content-center">
                <div className=" app-container col-8 text-center">
                    <ExpenseManager categories={categories}/>
                </div>
            </div>
        </div>
    )
};

export default Home;