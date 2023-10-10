import {Link} from "react-router-dom"
import "../styles/Header.css"

function Header() {

    return (
        <div className="header">
            <div className="menu-header">
                <ul>
                    <li><Link to="/">PHILOSOPHY</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
        </div>
    );

}

export default Header