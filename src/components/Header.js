import {Link} from "react-router-dom"
import "../styles/Header.css"

function Header() {

    return (
        <div className="header">
            <div className="menu-header">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/home">ABOUT</Link></li>
                    <li><Link to="/gallery">GALLERY</Link></li>
                    <li><Link to="/article">ARTICLE</Link></li>
                    <li><Link to="/contacts">CONTACTS</Link></li>
                </ul>
            </div>
        </div>
    );

}

export default Header