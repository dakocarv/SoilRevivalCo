import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Packages", href: "/#packages" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-green-900 px-6 py-12 text-cream-100 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Company name */}
        <p className="font-heading text-xl font-bold text-sage-300">
          GardenGround
        </p>

        {/* Nav links */}
        <ul className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-sage-200 transition-colors hover:text-cream-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-sm text-sage-400">
          &copy; {new Date().getFullYear()} GardenGround. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
