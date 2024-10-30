import { useSearchParams } from "react-router-dom"
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const myName = searchParams.get("name");
    const myAge = searchParams.get("age");

    return (
        <div className="flex flex-col gap-2">
            <h2>My name is {myName} and my age is {myAge}</h2>
            <Button onClick={() => { setSearchParams({ name: "Taaib", age: "22" }) }}>Set for Taaib</Button>

            <Input
                type="text"
                placeholder="Enter to dynamic Search"
                onChange={(e) => {
                    setSearchParams({ name: e.target.value });
                }}
            />
        </div>
    )
}

export default Search