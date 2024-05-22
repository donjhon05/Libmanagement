import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NavBar = () => {
    return (
        <div className="navbar">
            <h1>Library Management System</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/addbook">Add a book</Link>
            </div>
        </div>
    );
}
 
export default NavBar;