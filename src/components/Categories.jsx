import {categories} from "../data/expenseData.js";

const Categories = () => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className=" text-center col-8 pt-4">
                        <h3 className="fw-bold py-4">Categories</h3>
                        <ul>
                            {categories.map((category, index) => (
                                <li key={index}>{category}</li>
                            ))}
                        </ul>
                    </div>
            </div>
        </div>
    )
};

export default Categories;