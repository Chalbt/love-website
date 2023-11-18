import {Link} from "react-router-dom"
import "../styles/Header.css"


function Header() {

    return (
        <div className="header">
            <div>
                <Link to="/"><h1 className="brand-name">Heloise & Abelard</h1></Link>
            </div>
        </div>
    );

}

export default Header