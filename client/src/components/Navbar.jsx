import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <>
            <div id="navbar">
            
                <nav className="navbar-nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/healthai" className="nav-link">HealthAI</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/patientform" className="nav-link">RegisterPatient</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/patients" className="nav-link">Patients</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
