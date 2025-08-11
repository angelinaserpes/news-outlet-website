import React from "react";

const navItems = [
  { href: "#news", label: "News" },
  { href: "#sports", label: "Sports" },
  { href: "#culture", label: "Culture" },
  { href: "#business", label: "Business" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
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
        <a href="/" className="flex items-center gap-3" aria-label="News Outlet Home">
          <img
            src="/lovable-uploads/a051209b-7855-49d3-a092-2dade21ca186.png"
            alt="News Outlet logo"
            className="h-9 w-auto"
            loading="eager"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
            }}
          />
          <span className="sr-only">News Outlet</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
