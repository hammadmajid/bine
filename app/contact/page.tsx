import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "",
};

export default function ContactPage() {
  return (
    <div className="p-4 space-y-4">
      <main id="main-content" className="space-y-2">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p>
          You can send me an email at <Link
            className="text-light-accent hover:text-light-accent-hover"
            href="mailto:hammadmajid@proton.me"
          >
            hammadmajid@proton.me</Link
          >. Please allow a few days for a response.
        </p>
      </main>
      <section className="space-y-2">
        <h2 className="text-lg font-medium">PGP key</h2>
        <p>
          This is optional but I recommned that you encrypt the email you
          are sending using a PGP key. You can find my PGP key on <Link
            href="https://keys.openpgp.org/vks/v1/by-fingerprint/A40C364D8F90407DE3F057F05C22E7B2459D1E5E"
            className="text-light-accent hover:text-light-accent-hover"
          >keys.openpgp.org</Link
          >.
        </p>
      </section>
    </div>
  )
}
