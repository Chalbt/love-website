import "../styles/Footer.css"
import Instagram from "../assets/instagram.png"
import Mail from "../assets/mail.png"

function Footer() {

    return (
        <div className="footer">
            <a href="https://www.instagram.com/heloiseetabelard_/" aria-label="Suivez-nous sur Instagram" target="_blank"><img src={Instagram} alt="Logo instagram"/></a>
            <a href="mailto:contact@heloiseetabelard.com" aria-label="Contactez-nous pour toute demande d'informations"><img src={Mail} alt="Logo mail"/></a>
        </div>
    )

}

export default Footer