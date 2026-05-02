import React, { useState } from "react"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                The Stone Kitchen
            </div>

            <ul className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
                <li><a href="#hero">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>

            <div
                className="navbar-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navbar