import {categories} from "../data/expenseData.js";

const Categories = () => {

    return(
        <div>
            <h1>Categories</h1>
            {categories.map((category, index) => (
                <p key={index}>{category}</p>
            ))}
        </div>
    )
};

export default Categories;