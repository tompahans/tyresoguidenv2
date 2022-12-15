import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="/img/gfx/logofarg.png"
          width={1920}
          height={1080}
          alt="Tyresöguiden logo"
        />
      </Link>
    </header>
  );
}
