import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/UserName"

function Header() {
    return (
        <header className="bg-yellow-400 uppercase px-1  py-3 
            border-b-2 border-stone-200 sm:px-6 
            flex items-center justify-between">
            <Link to="/" className="tracking-widest px-2">Fast React Pizza Co.</Link>
            <SearchOrder />
            <Username />
        </header>
    )
}

export default Header
