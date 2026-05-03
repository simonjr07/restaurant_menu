import React from "react";

const MenuItem = (props) => {
  const { image, name, description, price, type } = props;

  if (!name) return null;

  return (
    <div className="menu-item">
      <div className="menu-item-img-wrapper">
        <img src={image} alt={name} className="menu-item-img" />
        <span className="menu-item-category">{type}</span>
      </div>
      <div className="menu-item-body">
        <div className="menu-item-top">
          <h3 className="menu-item-name">{name}</h3>
          <span className="menu-item-price">{price}</span>
        </div>
        <p className="menu-item-description">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
