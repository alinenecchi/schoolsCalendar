import React from "react";
import { useRouter } from "next/router";
import SubMenu from "../sub-menu";
import MenuIcon from "../../icons/Menu";
import CloseIcon from "../../icons/Close";
import Link from "next/link";
// loading the sass style fot the component
import css from "./header-nav.module.scss";
import ButtonHorizontal from "../button-horizontal";

/**
 * Molecule HeaderNav
 *
 * <!-- TODO: add a description here! -->
 */
function HeaderNav(props) {
  const {
    className = "",
    children,
    style,
    whoWeAre = true,
    Home = true,
    login = true,
    ...other
  } = props;

  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [state, setState] = React.useState({
    open: false,
  });

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  React.useEffect(
    (_) => {
      document.body.dataset.menuOpen = menuOpen ? 1 : 0;
    },
    [menuOpen]
  );

  function clicked(who) {
    return (event) => {
      setMenuOpen(false);
    };
  }

  return (
    <>
      <div
        className={`${css["molecule__header-nav-container"]} ${className}`}
        data-menu-open={menuOpen ? 1 : null}
        data-style={style}
        {...other}
      >
        <div className={css["navbar-container"]} data-content-wrapper>
          <Link href="/">
            <a title="CALENDAR-SCHOOLS" onClick={clicked("menu-logo")}>
              Logo
            </a>
          </Link>
          <div className={css["menu-container"]}>
            {whoWeAre ? (
              <Link href="/who-we-are">
                <a
                  onClick={clicked("menu-quem-somos")}
                  data-selected={router.pathname === "/who-we-are" ? 1 : null}
                  style={{ order: 1 }}
                >
                  Quem somos
                </a>
              </Link>
            ) : null}

            {router.pathname === "/login" || !login ? null : (
              <Link href="/login">
                <a
                  onClick={clicked("Login")}
                  title="Login"
                  data-selected={router.pathname === "/login" ? 1 : null}
                  style={{ order: 3 }}
                >
                  <ButtonHorizontal style="orange">Login</ButtonHorizontal>
                </a>
              </Link>
            )}
          </div>
          <div className={css["menu-icon-container"]} onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        {state.open && <div className={css["open-container"]} />}
      </div>
    </>
  );
}

export default HeaderNav;
