import { NextSeo } from "next-seo";
import Image from "next/image";
import Albystrand from "../public/img/large/albystrand.jpg";
import Barnsjon from "../public/img/medium/barnsjon.jpg";
import Strandbadet from "../public/img/large/strandbadet.jpg";
import Trinntorpsbadet from "../public/img/small/Trinntorpsbadet.jpg";
import Kumlabadet from "../public/img/medium/kumla3.jpg";
import Notholmen from "../public/img/small/notholmen.jpg";
import Skrubba from "../public/img/medium/skrubba.jpg";

import data from "../data.json";

const listBeaches = data.badplatser.map((badplatser) => (
  <div className="badplats" key={badplatser.namn}>
    <div className="col-sm py-5" id={badplatser.namn}>
      <h4>
        {badplatser.namn}
        {badplatser.egenskaper && " (" + badplatser.egenskaper + ")"}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: badplatser.text }} />
    </div>
    <div className="col-sm">
      <Image
        src={"/" + badplatser.image_url}
        alt={badplatser.namn}
        className="img-fluid img-thumbnail rounded p-0"
        width={380}
        height={216}
      />
    </div>
  </div>
));

const generateJumps = data.badplatser.map((badplatser) => (
  <>
    <a href={"#" + badplatser.namn} key={badplatser.namn}>
      {badplatser.namn}
    </a>{" "}
  </>
));

export default function Badplatser() {
  return (
    <>
      <NextSeo title="Badplatser" description="Badplatser i Tyresö" />

      <h1>Badplatser i Tyresö</h1>
      <div className="jump-menu sticky-top">
        Hoppa till: <a href="#">Toppen</a> {generateJumps}{" "}
      </div>
      {listBeaches}
    </>
  );
}
