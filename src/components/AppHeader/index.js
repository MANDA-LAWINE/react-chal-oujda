import React from "react";

const AppHeader = ({ title = "", description = "" }) => (
  <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4">{title}</h1>
    <p className="lead">{description}</p>
  </div>
);

export default AppHeader;
