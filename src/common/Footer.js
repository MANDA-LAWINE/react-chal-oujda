import React from "react";

const Footer = ({ features, resources, abouts }) => (
  <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img
          className="mb-2"
          src="/img/svg/bootstrap-solid.svg"
          alt=""
          width="24"
          height="24"
        />
        <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          {features.map((feature, index) => (
            <li key={index}>
              <a className="text-muted" href="#">
                {feature}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          {resources.map((resource, index) => (
            <li key={index}>
              <a className="text-muted" href="#">
                {resource}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          {abouts.map((about, index) => (
            <li key={index}>
              <a className="text-muted" href="#">
                {about}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
