import React from "react";

const PriceCard = ({ cardTitle, cardPrice, button, features = [] }) => (
  <div className="card mb-4 shadow-sm">
    <div className="card-header">
      <h4 className="my-0 font-weight-normal">{cardTitle}</h4>
    </div>
    <div className="card-body">
      <h1 className="card-title pricing-card-title">
        ${cardPrice} <small className="text-muted">/ mo</small>
      </h1>
      <ul className="list-unstyled mt-3 mb-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {button}
    </div>
  </div>
);

export default PriceCard;
