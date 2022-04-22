import React from 'react';

// loading the sass style fot the component
import css from './sub-menu.module.scss';

/**
 * Molecule SubMenu
 * 
 * <!-- TODO: add a description here! -->
 */
function SubMenu (props) {
  const {
    className = "",
    link1,
    link2,
    onClick,
    children,
    ...other
  } = props;

  return <div
    className={`${css["molecule__sub-menu-container"]} ${className}`}
    {...other}
  >
    <span onClick={onClick}>{link1}</span>
    <span onClick={onClick}>{link2}</span>

    {children}
  </div>;
}

export default SubMenu ;
