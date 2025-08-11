import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t">
      <div className="container py-10 text-sm text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <p>&copy; {new Date().getFullYear()} News Outlet. All rights reserved.</p>
          <nav className="flex gap-6" aria-label="Footer">
            <a href="#news" className="hover:text-foreground transition-colors">News</a>
            <a href="#sports" className="hover:text-foreground transition-colors">Sports</a>
            <a href="#culture" className="hover:text-foreground transition-colors">Culture</a>
            <a href="#business" className="hover:text-foreground transition-colors">Business</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
