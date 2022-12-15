import Navbar from "./navbar";
import Header from "./header";
import { Poppins } from "@next/font/google";

const poppins = Poppins({ weight: "400" });

export default function Layout({ children }) {
  return (
    <div className={poppins.className + " container"}>
      <main className="main">
        <Header />
        <Navbar />
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
