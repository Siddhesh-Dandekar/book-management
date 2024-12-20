import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utilis/usercontext";
import { useSelector } from "react-redux";

function Header() {
    const cartitem = useSelector(store => store.cart.items)
    const data = useContext(userContext);
    const{ setUserName } = useContext(userContext)

    return (
        <header className="m-2 w-full h-10 flex justify-center items-center">
            
            <ul className="flex gap-4 ">
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <li>{data.Name}</li>
                <button >Change name</button>
                <li>Cart = {cartitem.length}</li>
            </ul>
        </header>
    )
}

export default Header;