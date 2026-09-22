const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#volunteering", label: "Volunteering" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-mist bg-porcelain">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <a
          href="#top"
          className="font-serif text-xl font-medium text-graphite hover:text-link-hover"
        >
          Uma Chenniappan
        </a>
        <nav aria-label="Section">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-base text-stone">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-link-hover">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
