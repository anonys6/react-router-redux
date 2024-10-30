import { FaCartPlus } from "react-icons/fa"
import { Button } from "./ui/button"

const Home = (props: { addToCartHandler: (arg0: { product: string; price: string }) => void }) => {
    console.log("Home: ", props);
    return (
        <>
            <FaCartPlus size={40} className="absolute top-2 right-2" />
            <div className="p-4 flex">
                <div className="border-4 p-1 rounded-xl flex flex-col items-center gap-1">
                    <img src="https://picsum.photos/200/200" alt="random picsum pic" className="rounded-xl" />
                    <p>Laptop</p>
                    <p>$20</p>
                    <Button onClick={() => props.addToCartHandler({product: "Laptop", price: "20$"})}>Add</Button>
                </div>
            </div>
        </>
    )
}

export default Home