import React from "react";

export default [
  {
    cardTitle: "Free",
    price: 0,
    features: [
      "10 users included",
      "2 GB of storage",
      "Email support",
      "Help center access"
    ],
    button: (
      <button
        type="button"
        className="btn btn-lg btn-block btn-outline-primary"
      >
        Sign up for free
      </button>
    )
  },
  {
    cardTitle: "Pro",
    price: 15,
    features: [
      "20 users included",
      "10 GB of storage",
      "Priority email support",
      "Help center access"
    ],
    button: (
      <button type="button" className="btn btn-lg btn-block btn-primary">
        Get started
      </button>
    )
  },
  {
    cardTitle: "Enterprise",
    price: 29,
    features: [
      "30 users included",
      "15 GB of storage",
      "Phone and email support",
      "Help center access"
    ],
    button: (
      <button type="button" className="btn btn-lg btn-block btn-primary">
        Contact us
      </button>
    )
  }
];
