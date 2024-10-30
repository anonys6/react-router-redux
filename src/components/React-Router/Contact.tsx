import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"


const Contact = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-3">
            Contact

            <Button className="self-start" onClick={() => navigate("/")}>Go to Root Page</Button>
            <Button className="self-start" onClick={() => navigate("/about")}>Go to About Page</Button>
        </div>
    )
}

export default Contact