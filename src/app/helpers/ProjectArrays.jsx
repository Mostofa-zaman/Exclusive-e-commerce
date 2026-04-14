const menuItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 3, name: "About", path: "/about" },
  { id: 2, name: "Contact", path: "/contact" },
  { id: 4, name: "Sign Up", path: "/signup" },
];

const footerLinks = [
  {
    title: "Account",
    links: [
      { label: "My Account", path: "/my-account" },
      { label: "Login / Register", path: "/login" },
      { label: "Cart", path: "/cart" },
      { label: "Wishlist", path: "/wishlist" },
      { label: "Shop", path: "/shop" },
    ],
  },
  {
    title: "Quick Link",
    links: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms Of Use", path: "/terms-of-use" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact", path: "/contact" },
    ],
  },
];



export { menuItems ,footerLinks};
