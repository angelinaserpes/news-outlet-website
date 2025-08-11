import React from "react";

const navItems = [
  { href: "#news", label: "News" },
  { href: "#sports", label: "Sports" },
  { href: "#culture", label: "Culture" },
  { href: "#business", label: "Business" },
  { href: "#related", label: "Related" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3" aria-label="News Outlet Home">
          {/* Replace the src below with the uploaded logo path when available */}
          <img
            src="/lovable-uploads/logo.png"
            alt="News Outlet logo"
            className="h-9 w-auto"
            loading="eager"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
            }}
          />
          <span className="sr-only">News Outlet</span>
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
