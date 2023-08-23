import "../styles/Contact.css"

function Contact() {
    return (
        <div className="contact">
            <h2>Contact us for any collaboration or inquiries</h2>
            <form className="form" action="https://formsubmit.co/33568a4a4b195b9239793908ed96bf5e" method="POST">
                <label className="label">
                    Name (required):
                </label>
                <div className="name">
                    <label className="label">
                        First name:
                        <input type="text" name="firstName" />
                    </label>
                    <label className="label">
                        Last name:
                        <input type="text" name="lastName" />
                    </label>
                </div>
                <label className="label">
                    Email (required):
                    <input type="email" name="email" required />
                </label>
                <label className="label">
                    Subject (required):
                    <input type="text" name="subject" required />
                </label>
                <label className="label">
                    Message (required):
                    <textarea name="message" required></textarea>
                </label>
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact





