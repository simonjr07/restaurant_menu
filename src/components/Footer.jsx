import React from "react"

const Footer = () => {
    return (
        <footer className="footer" id="footer">

            <div className="footer-top">

                <div className="footer-col">
                    <h3 className="footer-logo">The Stone Kitchen</h3>
                    <p className="footer-about">
                        A neighbourhood restaurant dedicated to simple,
                        honest food made with care and quality ingredients.
                    </p>
                </div>

                <div className="footer-col">
                    <h4 className="footer-col-title">Opening Hours</h4>
                    <p>Monday - Friday: 11am - 10pm</p>
                    <p>Saturday: 10am - 11pm</p>
                    <p>Sunday: 10am - 9pm</p>
                </div>

                <div className="footer-col">
                    <h4 className="footer-col-title">Contact</h4>
                    <p>hello@thestonekitchen.com</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>2024 The Stone Kitchen. All rights reserved.</p>
            </div>

        </footer>
    )
}

export default Footer