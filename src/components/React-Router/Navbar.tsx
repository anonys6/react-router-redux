import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <ul className="flex flex-row gap-4 py-3 justify-around bg-slate-800">
            <li><NavLink className="hover:text-gray-300" to="/">Root</NavLink></li>
            {/* <li><NavLink className="hover:text-gray-300" to="/search">Search</NavLink></li> */}
            <li><NavLink className="hover:text-gray-300" to="/home">Home</NavLink></li>
            <li><NavLink className="hover:text-gray-300" to="/about">About</NavLink></li>
            {/* <li><NavLink className="hover:text-gray-300" to="/contact">Contact</NavLink></li> */}
            {/* <li><NavLink className="hover:text-gray-300" to="/dashboard">Dashboard</NavLink></li> */}
            <li><NavLink className="hover:text-gray-300" to="/login">Login</NavLink></li>

            {/* <li>
                <NavLink
                    className="hover:text-gray-300"
                    to="/contact"
                    style={({ isActive }) => {
                        return { backgroundColor: isActive ? "aqua" : "yellow" }
                    }}
                >
                    Contact
                </NavLink>
            </li> */}

            {/* <li><Link className="hover:text-gray-300" to="lol">Lol</Link></li> */}
        </ul>
    )
}

export default Navbar