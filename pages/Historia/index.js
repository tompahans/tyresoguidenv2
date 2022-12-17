import Image from "next/image";
import { NextSeo } from "next-seo";
import Rundmar from "../../public/img/medium/rundmar.jpg";

export default function Historia() {
  return (
    <>
      <NextSeo title="Historia" />
      <h1>Historia</h1>
      <div className="row">
        <div className="col-sm">
          <p>
            Dom första människorna anlände till det som nu är Tyresö kommun
            någon gång kring 3000-talet f.Kr. Boplatser uppstod inte förrän
            någon gång runt 600-talet. Det finns gravar och annan historia från
            denna förhistoriska tid.
          </p>
          <p>
            Tyresö har sitt ursprung i 1300-talet. Godset var som störst under
            1600-talet, då nästan all nutida kommun områden tillhörde det. Det
            var under denna tid som Tyresö Kyrka och Tyresö Slott byggdes.
          </p>

          <figure className="figure w-45 float-end m-2">
            <Image
              src={Rundmar}
              alt="Rundmar"
              className="figure-img img-fluid rounded img-thumbnail p-0"
            />
            <figcaption className="figure-caption">
              Rundmar är en av Tyresös äldsta gårdar. Den nämns redan år 1409
              och förmodligen grundlagts under tidig medeltid.
            </figcaption>
          </figure>
          <p>
            Mellan 1500-talet och 1800-talet var tyresö ett viktigt industriellt
            centrum i Stockholmsområdet tack vare vattenkraftverken som kunde
            byggas på strömmarna mellan sjöarna. Vattenhjulen i kommunvapnet
            visar dem tre sjöarna vid Nyfors, Uddby och Follbrinksströmmen.
            Industrierna inkluderade Valsverk, Pappersbruk, Smedjor, Sågar,
            Textilindrustri och även Tegelbruk. Ingen av dessa vattenkraftverk
            finns kvar. 1895 brann Uddby kvarn upp och iställe byggdes ett
            vattenkraftverk för att elen skulle producera. I stockholmstrakten
            är Elkraftverket det enda av sitt slag som finns kvar .
          </p>
          <p>
            I början av 1900-talet började Godsets stora delar av tyresö att
            styckas upp och sommarstugor börjar byggas. De första decennierna
            ekalerade byggtakten kraftigt. Från 1950-talet och framåt växte
            fritidshusens marknad fram med en brinnande fart.
          </p>

          <p>
            Från 1950-talet och framåt vart tillväxten enorm, speciellt efter
            att lagstiftningen om Lex Bollmora tillät kommunala fastighetsbolag
            att verka i kommuner andra än den egna. År 1965 invigdes
            kommuncentrumet i bollmora centrum. Miljonprogrammet satte sin
            särskildhet på Tyresö, särskilt Bollmora, mycket av bostadsområdena
            är från det programmet.
          </p>
          <p>
            1990-talet vart det en succe när centrumet byggdes om till en
            galleria och döptes om till Tyresö Centrum. Skogsbrand tog hårt på
            Tyresö och förstörde ungefär 15 % av Tyresta nationalpark i augusti
            1999.
          </p>
        </div>
      </div>
    </>
  );
}
