import './App.css'
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Home from "./components/Home.jsx";
import Categories from "./components/Categories.jsx";
import About from "./components/About.jsx";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/categories">Categories</Link> |{" "}
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/categories" element={<Categories/>} />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<p>404 - Page not found</p>} />
            </Routes>
        </BrowserRouter>


    );
}

export default App
