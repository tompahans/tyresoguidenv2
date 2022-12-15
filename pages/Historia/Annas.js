import { NextSeo } from "next-seo";
import Image from "next/image";
import AnnasPepparkakor from "../../public/img/large/annas.jpg";

export default function Annas() {
  return (
    <>
      <NextSeo title="Annas pepparkakor" />
      <h1>Annas Pepparkakor</h1>
      <div class="row">
        <h5 class="text-center">Bakgrund</h5>
        <p>
          Tyresö präglas i dess centrala delar av en gedigen doft av nybakta
          pepparkakor. Detta eftersom fabriken ligger belägen på Radiovägen.
          Historian började med två systrar som hade ett intresse i att baka och
          då valde pepparkakan. Kakan har sitt ursprung från Tyskland och det
          ska redan ha bakats under medeltiden. De kom senare till Sverige under
          1400-talet då vi blev influerade av Tyskland. Annas Pepparkakor
          etablerades under 1929 på ett litet bageri på Östermalm där även andra
          småkakor såldes. Efter detta så har nu ett belgiskt familjeföretag
          köpt upp företaget.
        </p>
        <h5 class="text-center">Företag i tyresö</h5>
        <p>
          Innan pandemin så fanns det möjlighet att köpa pepparkakor via en
          pepparkaksbod. Där erbjöd de ett större sortiment än vad som hittar i
          den vanliga dagvaruhandeln.
        </p>
        <div class="col-sm col-lg align-items-stretch">
          <Image
            src={AnnasPepparkakor}
            alt="Annas"
            class="img-fluid mx-auto d-block img-thumbnail rounded p-0"
          />
        </div>
      </div>
    </>
  );
}
