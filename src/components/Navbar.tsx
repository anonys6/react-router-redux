import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <ul className="flex flex-row gap-4 py-3 justify-around bg-slate-800">
            <li><Link className="hover:text-gray-300" to="/">Root</Link></li>
            <li><Link className="hover:text-gray-300" to="/home">Home</Link></li>
            <li><Link className="hover:text-gray-300" to="/about">About</Link></li>

            {/* <li><Link className="hover:text-gray-300" to="lol">Lol</Link></li> */}
        </ul>
    )
}

export default Navbar