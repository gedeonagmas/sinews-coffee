import Link from "next/link";

export const DaskTopMenusMenus = () => {
  return (
    <ul className="nav_scroll">
      {" "}
      <li>
        <a href="/">Home </a>
      </li>{" "}
      <li>
        <a href="/about">About </a>
      </li>{" "}
      <li>
        <a href="/team">Team </a>
      </li>{" "}
      <li>
        <a href="/service">Services </a>
      </li>{" "}
      <li>
        <a href="/product">Product </a>
      </li>{" "}
      <li>
        <a href="/blog">News & Event </a>
      </li>{" "}
      <li>
        <Link legacyBehavior href="contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};
