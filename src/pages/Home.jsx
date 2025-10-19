
import React from "react";
import { pizzas } from "../data/pizzas";
import CardPizza from "../components/CardPizza.jsx";

export default function Home() {
  return (
    <section className="row g-4">
      {pizzas.map((pz) => (
        <div className="col-12 col-md-4" key={pz.id}>
          <CardPizza
            id={pz.id}
            name={pz.name}
            price={pz.price}
            ingredients={pz.ingredients}
            img={pz.img}
          />
        </div>
      ))}
    </section>
  );
}
