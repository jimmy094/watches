import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);

    return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/createWatch">create watch</Link>
        <Link to="/savedWatches">saved watches</Link>
        {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
        ) : (
        <button>Logout</button>
        )}
        
    </div>
    )  
};