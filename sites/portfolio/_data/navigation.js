module.exports = {
  header: {
    links: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about.html" },
      {
        label: "Services",
        url: "/services.html",
        subLinks: [
          { label: "Branding", url: "/services/branding.html" },
          {
            label: "Web Design",
            url: "/services/web-design.html",
          },
          { label: "Optimization", url: "/services/optimization.html" },
        ],
      },
      { label: "Portfolio", url: "/portfolio.html" },
    ],
    cta: { label: "Start a Project", url: "/contact.html" },
  },
  bottombar: [
    { label: "Home", url: "/", icon: "home" },
    { label: "About", url: "/about", icon: "about" },
    { label: "Services", url: "/services", icon: "web-design" },
    { label: "Portfolio", url: "/portfolio", icon: "portfolio" },
    { label: "Contact", url: "/contact", icon: "contact" },
  ],
  footer: {
    groups: [
      {
        title: "Services",
        links: [
          { label: "Branding", url: "/services/branding.html" },
          {
            label: "Web Design",
            url: "/services/web-design.html",
          },
          { label: "Optimization", url: "/services/optimization.html" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Home", url: "/" },
          { label: "About", url: "/about.html" },
          { label: "Portfolio", url: "/portfolio.html" },
          { label: "Start a Project", url: "/contact.html" },
        ],
      },
      // {
      //   title: "Legal",
      //   links: [
      //     { label: "Privacy Policy", url: "/privacy-policy.html" },
      //     { label: "Terms of Service", url: "/terms-of-service.html" },
      //     { label: "Cookies", url: "/cookie-policy.html" },
      //     { label: "Sitemap", url: "/sitemap.html" },
      //   ],
      // },
    ],
    social: [
      {
        label: "Medium",
        icon: "medium",
        url: "#",
      },
      { label: "Dribbble", icon: "dribbble", url: "#" },
      { label: "Behance", icon: "behance", url: "#" },
      {
        label: "LinkedIn",
        icon: "linkedin",
        url: "#",
      },
      { label: "Twitter", icon: "twitter", url: "#" },
    ],
  },
};
