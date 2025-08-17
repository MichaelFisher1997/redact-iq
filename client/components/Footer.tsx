export default function Footer() {
  const footerLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Value", href: "#value" },
    { label: "Use cases", href: "#use-cases" },
    { label: "FAQ", href: "#faq" },
    { label: "Docs", href: "#" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="font-semibold text-slate-900 dark:text-slate-100 mb-4 md:mb-0">
            RedactIQ
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6 mb-4 md:mb-0">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="text-sm text-slate-500 dark:text-slate-400">
            © 2025 RedactIQ. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
