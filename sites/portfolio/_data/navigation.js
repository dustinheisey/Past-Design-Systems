module.exports = {
  header: {
    links: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about" },
      {
        label: "Services",
        url: "/services",
        subLinks: [
          { label: "Branding", url: "/services/branding" },
          {
            label: "Web Design",
            url: "/services/web-design",
          },
          { label: "Optimization", url: "/services/optimization" },
        ],
      },
      { label: "Portfolio", url: "/portfolio" },
      { label: "Blog", url: "/blog" },
    ],
    cta: { label: "Start a Project", url: "/contact" },
  },
  bottombar: {
    links: [
      { label: "Home", url: "/", icon: "home" },
      { label: "About", url: "/about", icon: "about" },
      { label: "Services", url: "/services", icon: "web-design" },
      { label: "Portfolio", url: "/portfolio", icon: "portfolio" },
      { label: "Blog", url: "/blog", icon: "blog" },
    ],
    fab: { url: "/contact", icon: "contact" },
  },
  footer: {
    groups: [
      {
        title: "Services",
        links: [
          { label: "Branding", url: "/services/branding" },
          {
            label: "Web Design",
            url: "/services/web-design",
          },
          { label: "Optimization", url: "/services/optimization" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Home", url: "/" },
          { label: "About", url: "/about" },
          { label: "Portfolio", url: "/portfolio" },
          { label: "Blog", url: "/blog" },
          { label: "Start a Project", url: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          {
            label: "Privacy Policy",
            url: "https://www.termsfeed.com/live/d5271eb0-e06a-49f5-9021-99c0bb40389b",
          },
          {
            label: "Terms of Service",
            url: "https://www.termsfeed.com/live/dc519ac0-71e6-49d3-a0d6-f9ce86815fa5",
          },
          {
            label: "Cookies",
            url: "https://www.termsfeed.com/live/012a4e98-08d0-48ab-b716-764b86ca84df",
          },
          { label: "Sitemap", url: "/sitemap.xml" },
        ],
      },
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
