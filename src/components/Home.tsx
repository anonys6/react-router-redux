import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button"

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("login");
        navigate("/login");
    }
    return (
        <div>
            Home
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Home 