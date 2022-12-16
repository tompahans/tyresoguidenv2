import { NextSeo } from "next-seo";
import Image from "next/image";
import TyresoSlott from "../../public/img/large/tyresoslott.jpg";

export default function Slottet() {
  return (
    <>
      <NextSeo title="Tyresö Slott" />
      <h1>Tyresö Slott</h1>
      <div className="row">
        <p>
          Tyresö slott byggdes på 1630-talet och den första som bosatte sig där
          var riddaren Erik Karlsson Örnfot. Slottet gick sedan i arv till hans
          dotter och sedan till släktena Lillie, Ryning, Bielke och
          Oxsenstierna. Tyresö slott har genomgått flera förändringar under
          tiden, och är ett gott exempel för hur krav på moderna boenden för
          högre ståndet växlat genom århundradena.
          <br />
          <Image
            src={TyresoSlott}
            className="img-fluid img-thumbnail rounded p-0 m-2 float-start"
            alt="Tyresö fucking slott"
          />
          Under 1700-talet genomgick slottet flest förändringar, viktigaste
          förändringen var att borggården var öppen mot norr och att portlängan
          ersattes av ett staket. Dessa stora förändringar kallas ”Tyresö
          stenhusens återbyggnad”. <br />
          Under 1800-talet så försågs framsidan av en präktig portal med
          Oxenstiernas vapensköld över och en dubbel fritrappa från borggården.
          Slottet fylldes med gobelänger, vävda tapeter, tavlor och andra
          konstverk. År 1905 så installerades centralvärme och telefoner men
          elektricitet drogs inte in förrän Nordiska Muséet tog över byggnaden.{" "}
          <br />I dagsläget har slottet ca 85 rum och västra flygeln används som
          restaurang. Under sommaren så är bottenvåningen öppen för besök av
          allmänheten, och till slottet hör en gårdsflygel som hyrs ut som
          privatbostad. Öster om slottet finns Prinsvillan som idag nyttjas som
          bland annat vandrarhem. Sydöst om Tyresö slott ligger Notholmen som är
          en ö i kalvfjärden. Ön har en bro in till slottsparken och har ett
          café och gästbrygga för fritidsbåtar.
        </p>
      </div>
    </>
  );
}
