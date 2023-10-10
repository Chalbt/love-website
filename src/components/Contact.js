import "../styles/Contact.css"
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="contact-page" id="top-of-contact-page">
            <Header />
            <div className="contact">
                <Link to="/"><h1 className="brand-name">Heloise & Abelard</h1></Link>
                <h2>We are commited to call you back, at the time of your convenience, within the same day.<br/>
                You can reach us via the form or directly on Whatsapp
                <Link to="https://wa.me/33688255149"> +33 688 255 149</Link></h2>
                <div className="contact-partie-2">
                    <div className="form">
                        <form className="form" action="https://formsubmit.co/4af0df5e0814d335146d5bc1aba025c0" method="POST">
                            <label className="label">
                                Name :
                                <input required type="text" name="firstName" />
                            </label>
                            <label className="label">
                                Number phone :
                                <input type="text" name="subject" required />
                            </label>
                            <label className="label" id="callback-time" for="callbackTime">Callback time :</label>
                                <select className="label-callback" id="callbackTime" name="callbackTime">
                                <option value="08:00 AM - 10:00 AM">8:00am - 10:00am</option>
                                <option value="10:00 AM - 12:00 PM">10:00am - 12:00pm</option>
                                <option value="12:00 PM - 02:00 PM">12:00pm - 2:00pm</option>
                                <option value="02:00 PM - 04:00 PM">2:00pm - 4:00pm</option>
                                <option value="04:00 PM - 06:00 PM">4:00pm - 6:00pm</option>
                                <option value="06:00 PM - 08:00 PM">6:00pm - 8:00pm</option>
                                </select>
                                <button className="submit" type="submit">
                                    Submit
                                </button>
                        </form>
                    </div>
                    <div className="map">
                        <iframe className="map-google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5906720248076!2d2.3268378120835!3d48.86601537121352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2e1a161985%3A0x262161d5a23b4d6c!2s229%20Rue%20Saint-Honor%C3%A9%2C%2075001%20Paris%2C%20France!5e0!3m2!1sfr!2sad!4v1696604412977!5m2!1sfr!2sad"
                        width="400"
                        height="300"
                        allowfullscreen=""
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact





