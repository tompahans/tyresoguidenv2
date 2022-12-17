import { NextSeo } from "next-seo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NextSeo title="Hem" />

      <h1>Välkommen till skärgårdskommunen Tyresö.</h1>
      <div className="row align-items-stretch">
        <div className="col-sm">
          <p>
            Förutom många badplatser så finns det två stora företag som präglar.
            Du kanske vill besöka Annas pepparkaksbod där du hittar ett
            exklusivt utbud utöver det vanliga. Även Fontanas fabriksförsäljning
            där det finns ett stort utbud av olivoljor, fetaost samt flera
            grekiska delikatesser.
          </p>
          <p>
            Tyresö slott är en populär plats att besöka för invånarna och bland
            turisterna, där finns restauranger, museum samt tillhörande grönska.
            Ett brett utbud av restauranger och en kompletterande
            restaurangguide hittar ni på hemsidan. Via Tyresö Guiden kommer ni
            hitta information om vad man kan göra i kommunen samt historian som
            är kopplad till de olika platserna.
          </p>
        </div>
        <div className="col-sm d-flex flex-column">
          <Image
            src="/img/small/bussforbindelse.jpg"
            className="img-fluid img-thumbnail p-0"
            alt="bussförbindelse till tyresö"
            width={400}
            height={314}
          />
          <p className="text-center">
            För att komma till Tyresö Centrum kan du antingen ta buss 873 eller
            875 från Gullmarsplan.
          </p>
        </div>
      </div>
    </>
  );
}
