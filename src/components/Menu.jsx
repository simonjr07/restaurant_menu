import React, { useState } from "react"
import { menuData } from "../data/menuData"
import MenuItem from "./MenuItem"

const categories = ["All", "Starters", "Mains", "Desserts"]

const Menu = () => {

    const [active, setActive] = useState("All")

    const filtered = active === "All"
        ? menuData
        : menuData.filter((item) => item.category === active)

    return (
        <section className="menu" id="menu">

            <div className="menu-header">
                <p className="menu-label">What We Offer</p>
                <h2 className="menu-title">Our Menu</h2>
                <p className="menu-subtitle">
                    Every dish is prepared fresh daily using locally
                    sourced ingredients from trusted suppliers.
                </p>
            </div>

            <div className="menu-categories">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`category-btn ${active === cat ? "category-btn-active" : ""}`}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="menu-grid">
                {filtered.map((item) => (
                    <MenuItem
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        category={item.category}
                    />
                ))}
            </div>

        </section>
    )
}

export default Menu