import Link from "next/link";
import { useRouter } from "next/router";

export const DaskTopMenusMenus = () => {
  const router = useRouter();
  const currentURL = router.asPath;
  return (
    <ul className="nav_scroll">
      {" "}
      <li>
        <a style={{ color: currentURL === "/" ? "red" : "" }} href="/">
          Home{" "}
        </a>
      </li>{" "}
      <li>
        <a
          style={{ color: currentURL === "/about" ? "red" : "" }}
          href="/about"
        >
          About{" "}
        </a>
      </li>{" "}
      {/* <li>
        <a href="/team">Team </a>
      </li>{" "} */}
      <li>
        <a
          style={{ color: currentURL === "/service" ? "red" : "" }}
          href="/service"
        >
          Services{" "}
        </a>
      </li>{" "}
      <li>
        <a
          style={{ color: currentURL === "/product" ? "red" : "" }}
          href="/product"
        >
          Product{" "}
        </a>
      </li>{" "}
      <li>
        <a style={{ color: currentURL === "/blog" ? "red" : "" }} href="/blog">
          News & Event{" "}
        </a>
      </li>{" "}
      <li>
        <a
          style={{ color: currentURL === "/contact" ? "red" : "" }}
          href="contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};
