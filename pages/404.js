import Link from "next/link";

export default function NotFound() {
  return (
    <div className="row align-items-center justify-content-center text-center">
      <h2>Ojdå</h2>
      <h4 className="text-center">Denna sida kan ej hittas.</h4>
      <p className="text-center">
        Gå tillbaka till <Link href="/">Hem</Link>
      </p>
    </div>
  );
}
