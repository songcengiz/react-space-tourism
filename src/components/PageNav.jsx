import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav({ page }) {
  return (
    <div className={styles.div}>
      <nav className={styles.nav}>
        <Logo />
        <hr />
        <ul className={`${styles[page]}`}>
          <li>
            <NavLink to={"/"} className={styles.ctaLink}>
              <span>00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/destination"}>
              <span>01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink to={"/crew"}>
              <span>02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink to={"/technology"}>
              {" "}
              <span>03</span>Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
