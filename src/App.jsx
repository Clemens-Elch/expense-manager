import './App.css'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Categories from "./components/Categories.jsx";
import About from "./components/About.jsx";
import {categories} from "./data/expenseData.js";
import Layout from "./components/Layout.jsx";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<Home categories={categories}/>} />
                    <Route path="/categories" element={<Categories/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="*" element={<p>404 - Page not found</p>} />
                    </Route>
                </Routes>
        </BrowserRouter>
    );
}

export default App
