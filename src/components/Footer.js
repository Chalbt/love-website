import "../styles/Footer.css"
import Instagram from "../assets/instagram.png"
import Mail from "../assets/mail.png"
import { Link } from "react-router-dom"

function Footer() {

    return (
        <div className="footer">
            <a href="https://www.instagram.com/heloiseetabelard_/" aria-label="Suivez-nous sur Instagram" target="_blank"><img src={Instagram} alt="Logo instagram"/></a>
            <Link to ="/Contact" aria-label="Contactez-nous pour toute demande d'informations"><img src={Mail} alt="Logo mail"/></Link>
        </div>
    )

}

export default Footer