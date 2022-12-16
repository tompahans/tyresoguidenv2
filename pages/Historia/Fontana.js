import { NextSeo } from "next-seo";
import Image from "next/image";
import FontanaImage from "../../public/img/large/fontana.jpg";

export default function Fontana() {
  return (
    <>
      <NextSeo title="Fontana Food" />
      <div className="row align-items-stretch">
        <div className="col-sm">
          <figure className="figure w-50 float-start m-2">
            <Image
              src={FontanaImage}
              alt="Fontana"
              className="figure-img img-fluid rounded img-thumbnail p-0"
            />
          </figure>
        </div>
        <div className="col-sm">
          <h1>Fontana Food</h1>
          <p>
            Fontana är ett familjeföretag som började med att Frixos och Maro
            Papadopolus kom till Sverige från Cypern på 1980-talet. De började
            importera olika goda smaker från Grekland, Cypern och andra länder
            kring Medelhavet. Oliver, feta, halloumi och olivoljor har senare
            kommit in i företaget som växer och utvecklas konstant.
          </p>

          <p>
            Fontana har alltid strävat efter att djur ska må bra, att det är
            ekologiskt och lokalproducerat. Alla råvaror har de smakat och
            doftat på, och de strävar alltid efter att utöka sitt sortiment men
            hållbara produkter.
          </p>
        </div>
      </div>
    </>
  );
}
