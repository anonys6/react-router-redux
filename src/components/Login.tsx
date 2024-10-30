import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button"

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("login", "true");
        navigate("/home");
    }

    return (
        <>
            Login
            <Button onClick={handleLogin}>Login</Button>
        </>
    )
}

export default Login