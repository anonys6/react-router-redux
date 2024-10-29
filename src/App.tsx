import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Navigate, Route, Routes } from "react-router-dom";
import Root from "./components/Root";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog/:name" element={<Blog />} />
                <Route path="*" element={<Navigate to="/" />} />
                {/* <Route path="*" element={<h1>404 - Not Found</h1>} /> */}
            </Routes>
        </>
    );
}

export default App;