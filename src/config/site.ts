import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "My Blog",
  description: "Nghiart's Blog - Chia sẻ kiến thức về AI, lập trình và SEO.",
  url: "https://nghiart.com",
  lang: "vi",
  locale: "vi_VN",
  author: "Nghia Ngo",
  twitter: "@nghiart",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com/devgelo-labs/astro-starter-pro",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Blog", href: "/" },
    { text: "Contact", href: "/contact" },
    { text: "Widgets", href: "/widgets" },
  ],
};
