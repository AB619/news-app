import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNEWS</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news" label="News" />
          </li>
          <li>
            <NavLink href="/archive" label="Archive" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
