import { Link } from "react-router-dom";

export const Navbar = () => {
    return <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/auth">Login/Register</Link>
        <Link to="/createWatch">create watch</Link>
        <Link to="/savedWatches">saved watches</Link>
    </div>
}