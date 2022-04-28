import React from 'react';
import { useRouter } from 'next/router';
import SubMenu from '../sub-menu';
import MenuIcon from '../../icons/Menu';
import CloseIcon from '../../icons/Close';
import ArrowRight from '../../icons/ChevronRight';
import Link from 'next/link';
// loading the sass style fot the component
import css from './header-nav.module.scss';
import ButtonHorizontal from '../button-horizontal';


/**
 * Molecule HeaderNav
 * 
 * <!-- TODO: add a description here! -->
 */
function HeaderNav (props) {
  const {
    className = "",
    children,
    style,
    one = true,
    flex = true,
    login = true,
    reserve = true,
    ...other
  } = props;

  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [state, setState] = React.useState({
      open: false,
  });

  function toggleMenu () {
    setMenuOpen(!menuOpen);
  }

  React.useEffect(_ => {
    document.body.dataset.menuOpen = menuOpen ? 1 : 0;
  }, [menuOpen]);


  function clicked (who) {
    return event => {
      setMenuOpen(false);
    };
  }

  return <>
    <div
      className={`${css["molecule__header-nav-container"]} ${className}`}
      data-menu-open={menuOpen ? 1 : null}
      data-style={style}
      {...other}
    >
      <div className={css["navbar-container"]} data-content-wrapper>
        <Link href="/">
          <a title="CALENDAR-SCHOOLS" onClick={clicked('menu-logo')}>
            LOGO
          </a>
        </Link>

        <div className={css["menu-container"]}>

        <Link href="/home">
            <a 
              onClick={clicked('Home')}
              title="Home"
              data-selected={router.pathname === '/home' ? 1 : null}
              style={{order: 1}}
            >
              Home
            </a>
          </Link>

          <Link href="/who-we-are">
            <a
              onClick={clicked('menu-quem-somos')}
              data-selected={router.pathname === '/who-we-are' ? 1 : null}
              style={{order: 2}}
            >
              Quem somos
            </a>
          </Link>
      
          <Link href="/users">
            <a 
              onClick={clicked('Users')}
              title="Users"
              data-selected={router.pathname === '/users' ? 1 : null}
              style={{order: 3}}
            >
              Users
            </a>
          </Link>
          
          <Link href="/account/login">
            <a 
              onClick={clicked('Login')}
              title="Login"
              data-selected={router.pathname === '/account/login' ? 1 : null}
              style={{order: 4}}
            >
              <ButtonHorizontal style="orange">
                Login
              </ButtonHorizontal>
            </a>
          </Link>
        
          <Link href="/account/register">
            <a 
              onClick={clicked('Register')}
              title="Register"
              data-selected={router.pathname === '/account/register"' ? 1 : null}
              style={{order: 5}}
            >
              <ButtonHorizontal style="orange">
                Register
              </ButtonHorizontal>
            </a>
          </Link>
          
        </div>
        <div
          className={css["menu-icon-container"]}
          onClick={toggleMenu}
        >
          {
            menuOpen
              ? <CloseIcon />
              : <MenuIcon />
          }
        </div>
      </div>
      {
        state.open && (
          <div className={css["open-container"]}/>
        )}
    </div>
  </>;
}

export default HeaderNav;
