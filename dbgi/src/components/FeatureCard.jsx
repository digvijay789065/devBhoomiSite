import React from "react";

const FeatureCard = ({
    iconImage,
    title,
    description,
}) => {
  return (
    <div>
      <div className="feature-card">
        <i className={iconImage}></i>
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
