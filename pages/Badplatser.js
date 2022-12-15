import { NextSeo } from "next-seo";
import Image from "next/image";
import Albystrand from "../public/img/large/albystrand.jpg";
import Barnsjon from "../public/img/medium/barnsjon.jpg";
import Strandbadet from "../public/img/large/strandbadet.jpg";
import Trinntorpsbadet from "../public/img/small/Trinntorpsbadet.jpg";
import Kumlabadet from "../public/img/medium/kumla3.jpg";
import Notholmen from "../public/img/small/notholmen.jpg";
import Skrubba from "../public/img/medium/skrubba.jpg";

export default function Badplatser() {
  return (
    <>
      <NextSeo title="Badplatser" description="Badplatser i Tyresö" />

      <h1>Badplatser i Tyresö</h1>
      <div class="jump-menu sticky-top">
        Hoppa till:
        <a href="#">Toppen</a> <a href="#Alby">Alby</a>{" "}
        <a href="#Strandbadet">Strandbadet</a> <a href="#Barnsjön">Barnsjön</a>{" "}
        <a href="#Trinntorpsbadet">Trinntorpsbadet</a>{" "}
        <a href="#Notholmen">Notholmen</a> <a href="#Skrubba">Skrubba</a>{" "}
        <a href="#Kumlabadet">Kumlabadet</a>{" "}
      </div>

      <div class="row">
        <div class="col-sm py-5" id="Alby">
          <h4>Albybadet</h4>
          <p>
            I anslutning till Alby naturreservat finns den populära Albybadet
            beläget. En sandstrand perfekt för människor i alla åldrar.
          </p>
          <p>
            En stor parkering finns i anslutning till Alby Friluftsgård där man
            även finner kiosk och café.
          </p>
          <p>Busstation: Nyfors (Alby friluftsgård).</p>
          <p>
            Förutom bad så finns aktiviteter så som utegym, vandringsleder samt
            frisbeegolfbana tillgängligt i anslutning till Alby Friluftsområde.
          </p>
        </div>
        <div class="col-sm text-center">
          <Image
            src={Albystrand}
            alt="Albybadet"
            class="img-fluid img-thumbnail rounded p-0"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-sm text-center">
          <Image
            src={Strandbadet}
            alt="Strandbadet"
            class="img-fluid img-thumbnail rounded p-0"
          />
        </div>
        <div class="col-sm py-5" id="Strandbadet">
          <h4>Tyresö Strandbad</h4>
          <p>
            Strandbadet är en stor sandstrand på Strandallén vid Erstaviken.
            Förutom sandstrand i anslutning till vattnet så hittar man även
            gräsytor samt klippor att ligga på. Fin strand för familjen.
          </p>
          <p>
            En liten parkering finns i anslutning till badet (Tips, kom tidigt
            för att säkert få plats).
          </p>
          <p>Busstation: Strandbadet.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm py-5" id="Barnsjön">
          <h4>Barnsjön (klippor)</h4>
          <p>
            Barnsjön är en skogssjö med mindre bryggor omgivet med skog och
            klippor.
          </p>
          <p>
            Buss station: Marsvägen. Inga bilvägar ner till badet. Här tar man
            en frisk promenad ner till sjön (möjligtvis cykel).
          </p>
          <p>Restaurang finns 200 meter från badplatsen.</p>
        </div>
        <div class="col-sm text-center">
          <Image
            src={Barnsjon}
            alt="Barnsjön"
            class="img-fluid img-thumbnail rounded p-0"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm text-center">
          <Image
            src={Trinntorpsbadet}
            alt="Trinntorpsbadet"
            class="img-fluid img-thumbnail rounded p-0"
          />
        </div>
        <div class="col-sm py-5" id="Trinntorpsbadet">
          <h4>Trinntorpsbadet (Strand)</h4>
          <p>
            Trinntorpsbadet är en badplats i Tyresö med badbrygga.
            Trinntorpsbadet är ett havsbad som ligger i Brevik på Brevikshalvön.
            I närheten av den finns fina natursköna vandringsområden.
          </p>
          <p>
            Badplatsen ligger precis bakom busshållsplatsen (Trinntorp) så det
            är väldigt enkelt att hitta dit.
          </p>
          <p>
            Ta buss 819 från Tyresö centrum och gå av vid Trinntorp(19
            hållplatser).
          </p>
          <p>
            Om du tar bilen så finns det parkering precis brevid badplatsen.
          </p>
          <p>
            Tyresöbryggan ligger nära Trinntorpsbadet. Från bryggan kan man ta
            sig med båt till öarna Utö, Dalarö, Ornö och Namdö.
          </p>
          <p>
            Ca 100 meter från badplatsen ligger restaurang Ranchland och där
            finns även en liten livsmedelsbutik.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm py-5" id="Notholmen">
          <h4 id="Notholmen">Notholmen/Tyresö slott (Klippor)</h4>
          <p>
            Bad finns ute på udden förbi Notholmen café där man kan komma ner i
            vattnet från bergsknallen. Ingen strand och mer anpassat för
            simkunniga.
          </p>
          <p>
            Parkering finns uppe vid slottet och kyrkan där man kan gå ner till
            holmen.
          </p>
          <p>Busstation: Tyresö kyrka</p>
          <p>
            För mat finns både Tyresö slotts cafeét samt notholmen för både nått
            lättare samt en stabilare lunch.
          </p>
        </div>
        <div class="col-sm text-center">
          <Image
            src={Notholmen}
            alt="Notholmen"
            class="img-fluid img-thumbnail rounded p-0"
          />
        </div>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="col-sm text-center">
          <Image
            src={Skrubba}
            alt="Skrubba"
            class="img-fluid img-thumbnail rounded p-0"
          />
        </div>

        <div class="col-sm py-5" id="Skrubba">
          <h4>Skrubbabadet (Strand/klippor)</h4>
          <p>
            Är en liten fin uppskattad badstrand med brygga populärt för
            småbarnsfamiljer. Föredrar man klippor så finns det en hel del berg
            i närområdet anslutet till stranden. Finns även en båt soliga dagar
            som levererar glass
          </p>
          <p>Busstation: Hanviken eller Solkraftsvägen är nära belägna.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm py-5" id="Kumlabadet">
          <h4>Kumlabadet (Stenstrand)</h4>
          <p>
            Jättefin strand med två &quot;sektioner&quot; där en är lite mer
            långgrund och passar bra för familjer med mindre barn och en del som
            passar bättre för familjer med lite större barn. Det finns en kiosk.
            Liksom gungor och bra med gräsytor som både täcks av skugga bakom
            stora träd eller ligger i öppen sol om man föredrar det.
          </p>
          <p>Busstation: Trollbäcken Centrum</p>
          <p>Finns parkering precis i anslutning till badet (ca 25 platser).</p>
        </div>
        <div class="col-sm text-center">
          <Image
            src={Kumlabadet}
            alt="Skrubba"
            class="img-fluid img-thumbnail rounded p-0"
          />
        </div>
      </div>
    </>
  );
}
