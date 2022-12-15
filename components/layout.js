import Navbar from "./navbar";
import Header from "./header";
import { Roboto } from "@next/font/google";

const roboto = Roboto({ weight: "400" });

export default function Layout({ children }) {
  return (
    <div className={roboto.className + " container"}>
      <main className="main">
        <Header />
        <Navbar />
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
