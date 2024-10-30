import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Navigate, Route, Routes } from "react-router-dom";
import Root from "./components/Root";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Search from "./components/Search";
import Dashboard, { Admin, Student } from "./components/Dashboard";
import Login from "./components/Login";
import Protectecd from "./components/Protectecd";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Root />} />
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/home" element={<Protectecd Component={Home} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog/:name" element={<Blog />} />
                <Route path="/search" element={<Search />} />
                <Route path="/dashboard/ " element={<Dashboard />} >
                    <Route path="admin" element={<Admin />} />
                    <Route path="student" element={<Student />} />
                </Route>
                <Route path="/login" element={<Login />} />


                <Route path="*" element={<Navigate to="/" />} />
                {/* <Route path="*" element={<h1>404 - Not Found</h1>} /> */}
            </Routes>
        </>
    );
}

export default App;