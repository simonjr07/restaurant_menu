import React, { useState } from "react";
import { menuData } from "../data/menuData";
import MenuItem from "./MenuItem";

const cuisines = ["All", "Continental", "Nigerian"];
const dishTypes = ["All", "Starters", "Mains", "Desserts", "Beverages"];

const cuisineLabels = {
  All: "All",
  Continental: "Continental Menu",
  Nigerian: "Nigerian Menu",
};

const Menu = () => {
  const [activeCuisine, setActiveCuisine] = useState("All");
  const [activeType, setActiveType] = useState("All");

  const filtered = menuData.filter((item) => {
    const cuisineMatch =
      activeCuisine === "All" || item.cuisine === activeCuisine;
    const typeMatch = activeType === "All" || item.type === activeType;
    return cuisineMatch && typeMatch;
  });

  return (
    <section className="menu" id="menu">
      <div className="menu-header">
        <p className="menu-label">What We Offer</p>
        <h2 className="menu-title">Our Menu</h2>
        <p className="menu-subtitle">
          Every dish is prepared fresh daily using locally sourced ingredients
          from trusted suppliers.
        </p>
      </div>

      <div className="menu-categories">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            className={`category-btn ${activeCuisine === cuisine ? "category-btn-active" : ""}`}
            onClick={() => setActiveCuisine(cuisine)}
          >
            {cuisineLabels[cuisine]}
          </button>
        ))}
      </div>

      <div className="menu-categories">
        {dishTypes.map((type) => (
          <button
            key={type}
            className={`category-btn ${activeType === type ? "category-btn-active" : ""}`}
            onClick={() => setActiveType(type)}
          >
            {type}
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
            cuisine={item.cuisine}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
