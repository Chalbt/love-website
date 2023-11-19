import {Link} from "react-router-dom"
import "../styles/Header.css"


function Header() {

    return (
        <div className="header">
            <div>
                <Link to="/"><h1 className="brand-name">HELOISE & ABELARD</h1></Link>
            </div>
            {/*<div className='contacts'>
                    <p className='lien-contacts'><Link to="/contact">CONTACTS</Link></p>
            </div>*/}
        </div>
    );

}

export default Header