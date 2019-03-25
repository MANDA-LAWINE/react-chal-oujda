import AppHeader from "components/AppHeader";
import React from "react";

import pageTitleDescription from "mocks/pageTitleDescription";

const About = () => {
  let { title, description } = pageTitleDescription[2];
  return (
    <>
      <AppHeader title={title} description={description} />
      <main>
        <section className="card-deck mb-3 text-center">
          <h1>About works !!!</h1>
        </section>
      </main>
    </>
  );
};

export default About;
