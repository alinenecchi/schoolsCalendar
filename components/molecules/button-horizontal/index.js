import React from 'react';

// loading the sass style fot the component
import css from './button-horizontal.module.scss';

/**
 * Molecule ButtonHorizontal
 * 
 * <!-- TODO: add a description here! -->
 */
function ButtonHorizontal (props) {
  const {
    className = "",
    children,
    clickEvent,
    onClick,
    style,
    ...other
  } = props;

  return <button
    className={`${css["molecule__button-horizontal-container"]} ${className}`}
    data-style={style}
    onClick={clickEvent || onClick}
    {...other}
  >
    <span>{children}</span>
    {/* <div className={css["arrow-right"]}>X</div> */}
    <div className={css.arrowRight}/>
  </button>;
}

export default ButtonHorizontal;
