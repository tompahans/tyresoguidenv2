import Navbar from "./navbar";
import Header from "./header";
import Head from "next/head";
import { Poppins } from "@next/font/google";

const poppins = Poppins({ weight: "400", subsets: "latin" });

export default function Layout({ children }) {
  return (
    <main className={poppins.className + " main"}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8"></meta>
      </Head>
      <Header />
      <Navbar />
      <div className="content">{children}</div>
    </main>
  );
}
