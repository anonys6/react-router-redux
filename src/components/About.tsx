import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div>About</div>
            <ul className='flex flex-col gap-2 mt-3'>
                <Link to="/blog/saqib">Saqib Blog</Link>
                <Link to="/blog/taaib">Taaib Blog</Link>
            </ul>
        </>
    )
}

export default About