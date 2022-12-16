import { NextSeo } from "next-seo";
import Image from "next/image";
import Slott1 from "../../public/img/small/slott-side.jpg";
import Slott2 from "../../public/img/small/slott-side2.jpg";
import Slott3 from "../../public/img/small/slott-side3.jpg";
import Slott4 from "../../public/img/small/slott-bakom.jpg";
import Slott5 from "../../public/img/small/slott-gard.jpg";

export default function Slottet() {
  return (
    <>
      <NextSeo title="Besök Tyresö Slott" />
      <div className="row">
        <div className="col-sm d-flex flex-column justify-content-center align-items-center">
          <h1>Besök Tyresö Slott</h1>
          <p>
            Att resa tillbaka i tiden är alltid ett av de högsta önskemålen för
            de flesta människor. Tyresö slotts- och Tyresö kyrka har reservat
            1600-tal - 1900-talsminnen och arkitekturstilar för dig att
            utforska. Tyresö slott byggdes omkring 1621 och stod färdigt 1636,
            och nästan samtidigt invigdes Tyresö kyrka. När arkitekten Gabriel
            Oxenstierna ritade och byggde Tyresö slott, använde han
            nationalromantik som grundstil för att designa hela slottets
            interiör.
          </p>{" "}
          <p>
            Numera är Tyresö slott ett av de museer som tillhör Nordiska museet,
            insidan av Tyresö slott är endast öppet för besökare sommartid från
            28 maj till 4 september varje helg, men parken är öppen året runt.
            Tyresö kyrka kan besökas tillsammans med Tyresö slott enligt de
            flesta ortsbor. Den har liknande stil med Tyresö slott och till och
            med Stadshuset i Stockholms-centrum, som byggdes i en blandning av
            gotik och renässansstil.
          </p>
          <p>
            Det mest populära schemat för detta område är att ta buss 875
            (destination: Tyresö kyrka) eller bil från Tyresö centrum för att
            besöka. Vi rekommenderar att besökarna kan gå runt i parken och
            naturen nära slottet, till och med ta en fika i Borggårdscafét som
            ligger på Tyresö slott. När du sitter i kaféet och njuter av kaffet
            kan du föreställa dig i tidskapseln och resa tillbaka till 1600- och
            1700-talet. Genom att titta och glasa in omgivningarna i slottet kan
            du befinna dig i ett lugnare och långsammare sinne. Så varför inte
            ta en dag bara insupa historien och naturlandskapet på Tyresö slott?
          </p>
          <div
            id="carouselSlottet"
            className="carousel slide w-100 float-end my-3"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselSlottet"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSlottet"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSlottet"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSlottet"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSlottet"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src={Slott1}
                  className="d-block w-100"
                  alt="Slottet från höger"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={Slott2}
                  className="d-block w-100"
                  alt="Slottet från vänster"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={Slott3}
                  className="d-block w-100"
                  alt="Slott från höger"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={Slott4}
                  className="d-block w-100"
                  alt="Slott bakifrån"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={Slott5}
                  className="d-block w-100"
                  alt="Slottet bakgård"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselSlottet"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselSlottet"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
