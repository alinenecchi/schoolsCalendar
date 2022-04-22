import css from "./navbar.module.scss";
import Menu from "../../icons/Menu";
import Close from "../../icons/Close";
import { useState } from "react";
import Link from "next/link";
import Container from "../../atoms/container";

function NavBar(props) {
  const { className, children, ...rest } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container className={css["navbar-sticky"]}>
      <div
        className={css["navbar-container"]}
        data-menu-open={menuOpen ? 1 : null}
        {...rest}
      >
        <div className={css["navbar-logo"]}>
          <div
            className={css["menu-icon"]}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <Close className={css["menu-close"]} />
            ) : (
              <Menu className={css["menu-open"]} />
            )}
          </div>
        </div>
        <div className={css["navbar-items"]}>
          <Link href={"/"}>
            <a className={css["nav-link"]}>home</a>
          </Link>
          <Link href={"/home"}>
            <a className={css["nav-link"]}>qualquer</a>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default NavBar;
