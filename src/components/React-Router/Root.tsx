import { Link } from "react-router-dom"

const Root = () => {
    return (
        <div className="flex flex-col gap-3 items-center">
            <h2>Root</h2>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Root