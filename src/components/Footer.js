import "../styles/Footer.css"
import Instagram from "../assets/instagram.png"
import Mail from "../assets/mail.png"

function Footer() {

    return (
        <div className="footer">
            <img src={Instagram} alt="Logo instagram"/>
            <img src={Mail} alt="Logo mail"/>
        </div>
    )

}

export default Footer