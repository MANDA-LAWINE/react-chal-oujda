import AppHeader from "components/AppHeader";
import PriceCard from "components/PriceCard";
import React from "react";

import pageTitleDescription from "mocks/pageTitleDescription";
import priceCards from "mocks/cardsData";

const Home = () => {
  let { title, description } = pageTitleDescription[0];
  return (
    <>
      <AppHeader title={title} description={description} />
      <main>
        <section className="card-deck mb-3 text-center">
          {priceCards.map(({ cardTitle, price, features, button }, index) => (
            <article className="col-sm-4" key={index}>
              <PriceCard
                cardTitle={cardTitle}
                cardPrice={price}
                features={features}
                button={button}
              />
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
