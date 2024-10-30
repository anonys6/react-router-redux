import "./App.css";
import Home from "./components/React-Router/Home";
import About from "./components/React-Router/About";
import { Navigate, Route, Routes } from "react-router-dom";
import Root from "./components/React-Router/Root";
import Navbar from "./components/React-Router/Navbar";
import Blog from "./components/React-Router/Blog";
import Contact from "./components/React-Router/Contact";
import Search from "./components/React-Router/Search";
import Dashboard, { Admin, Student } from "./components/React-Router/Dashboard";
import Login from "./components/React-Router/Login";
import Protectecd from "./components/React-Router/Protectecd";

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