import { useParams } from "react-router-dom"

const Blog = () => {
    const { name } = useParams()
    return (
        <div>This is blog of {name?.toUpperCase()}</div>
    )
}

export default Blog