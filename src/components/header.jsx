import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="m-2 w-full h-10 flex justify-center items-center">
            <ul className="flex gap-4 ">
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </header>
    )
}

export default Header;