import AppHeader from "components/AppHeader";
import React from "react";

import pageTitleDescription from "mocks/pageTitleDescription";

const Contact = () => {
  let { title, description } = pageTitleDescription[1];
  console.log();
  return (
    <>
      <AppHeader title={title} description={description} />
      <main>
        <section className="card-deck mb-3 text-center">
          <h1>Contact works !!!</h1>
        </section>
      </main>
    </>
  );
};

export default Contact;
