import "../styles/Contact.css"
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="contact-page">
            <Header />
            <div className="contact">
                <h2>We are commited to call you back, at the time of your convenience, within the same day.<br/>
                You can reach us via the form or directly on Whatsapp
                <Link to="https://wa.me/33688255149"> +33 688 255 149</Link> or by email <a href="mailto:contact@heloiseabelard.com">contact@heloiseabelard.com</a></h2>
                <div className="contact-partie-2">
                    <div className="form">
                        <form className="form" action="https://formsubmit.co/33568a4a4b195b9239793908ed96bf5e" method="POST">
                            <label className="label">
                                Name :
                                <input required type="text" name="firstName" />
                            </label>
                            <label className="label">
                                Number phone :
                                <input type="text" name="subject" required />
                            </label>
                            <label for="callbackTime">Callback time :</label>
                                <select id="callbackTime" name="callbackTime">
                                <option value="08:00 AM - 10:00 AM">8:00am - 10:00am</option>
                                <option value="10:00 AM - 12:00 PM">10:00am - 12:00pm</option>
                                <option value="12:00 PM - 02:00 PM">12:00pm - 2:00pm</option>
                                <option value="02:00 PM - 04:00 PM">2:00pm - 4:00pm</option>
                                <option value="04:00 PM - 06:00 PM">4:00pm - 6:00pm</option>
                                <option value="06:00 PM - 08:00 PM">6:00pm - 8:00pm</option>
                                </select>
                            <input className="submit" type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.098038039534!2d2.3283239!3d48.86680955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3201ad2c71%3A0xa3687f4e82da3ea4!2sPlace%20Vend%C3%B4me%2C%20Paris%2C%20France!5e0!3m2!1sfr!2sma!4v1694098541077!5m2!1sfr!2sma"
                        width="400"
                        height="300"
                        allowfullscreen=""
                        loading="lazy"
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





