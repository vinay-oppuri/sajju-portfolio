import React from "react";

function InstagramIcon({ className = "size-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterIcon({ className = "size-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FiverrIcon({ className = "size-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 508.02 508.02" className={className} fill="currentColor" aria-hidden="true">
      <mask id="fiverr-cutout">
        <rect width="100%" height="100%" fill="white" />
        <circle cx="314.14" cy="161.21" r="26.87" fill="black" />
        <path
          d="M344.04 206.68h-123v-8.06c0-15.83 15.83-16.13 23.89-16.13 9.25 0 13.44.9 13.44.9v-43.6a155.21 155.21 0 0 0-19.71-1.19c-25.68 0-73.16 7.16-73.16 61.51v8.89h-22.4v40.31h22.4v85.1h-20.9v40.31h85.34v-40.31h-24.49v-85.1H290v85.1h-20.87v40.31h97.65v-40.31h-22.74v-85.74z"
          fill="black"
        />
      </mask>
      <circle cx="254.01" cy="254.01" r="254.01" mask="url(#fiverr-cutout)" />
    </svg>
  );
}

function UpworkIcon({ className = "size-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/sajju0711/",
  },
  {
    name: "Fiverr",
    icon: FiverrIcon,
    url: "https://www.fiverr.com/sajju0711",
  },
  {
    name: "Upwork",
    icon: UpworkIcon,
    url: "https://www.upwork.com",
  },
  {
    name: "Twitter / X",
    icon: TwitterIcon,
    url: "https://twitter.com/sajju0711",
  },
];

export const SocialLinks = () => {
  return (
    <nav
      aria-label="Social links"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex md:hidden items-center gap-1 rounded-xl bg-muted/90 backdrop-blur-md border border-border/40 p-1 shadow-lg"
    >
      {socialLinks.map(({ name, icon: Icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="flex size-9.5 items-center justify-center rounded-xl text-foreground/75 hover:text-foreground hover:bg-background/70 active:scale-95 transition-all cursor-pointer"
        >
          <Icon className="size-4.5" />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
