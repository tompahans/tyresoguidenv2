import Link from "next/link";
import Image from "next/image";
import Logo from "../public/img/gfx/logofarg.png";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image src={Logo} alt="Tyresöguiden logo" />
      </Link>
    </header>
  );
}
