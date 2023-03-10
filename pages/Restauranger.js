import { NextSeo } from "next-seo";
import Link from "next/link";

import data from "../data.json";

const sortRestaurants = [...data.restauranger].sort((a, b) =>
  a.namn > b.namn ? 1 : -1
);

const listRestaurants = sortRestaurants.map((restauranger) => (
  <div key={restauranger.namn}>
    <Link
      href={restauranger.href}
      target="_BLANK"
      className="link-primary-color"
    >
      <h4>{restauranger.namn}</h4>
    </Link>
    <p>Plats: {restauranger.plats}</p>
    <p>Meny: {restauranger.meny}</p>
    <p>Takeaway: {restauranger.takeaway ? "Möjligt" : "Ej möjligt"}</p>
  </div>
));

export default function Restauranger() {
  return (
    <>
      <NextSeo title="Restauranger" />

      <div className="row">
        <h1>Restauranger</h1>
        <div className="restaurangLista">{listRestaurants}</div>
      </div>
    </>
  );
}
