import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import data from "../data.json";

const listBeaches = data.badplatser.map((badplatser, idx) => (
  <div className="badplats" key={badplatser.namn}>
    <div className="col-sm py-5" id={badplatser.namn}>
      <h4>
        {badplatser.namn}
        {badplatser.egenskaper && " (" + badplatser.egenskaper + ")"}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: badplatser.text }} />
    </div>
    <div className="col-sm" key={idx}>
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

export default function Badplatser() {
  return (
    <>
      <NextSeo title="Badplatser" description="Badplatser i Tyresö" />

      <h1>Badplatser i Tyresö</h1>
      <div className="jump-menu sticky-top" style={{ zIndex: "2" }}>
        Hoppa till: <a href="#">Toppen</a>{" "}
        {data.badplatser.map((badplatser) => (
          <React.Fragment key={badplatser.namn}>
            <Link href={"#" + badplatser.namn}>{badplatser.namn}</Link>{" "}
          </React.Fragment>
        ))}{" "}
      </div>
      {listBeaches}
    </>
  );
}
