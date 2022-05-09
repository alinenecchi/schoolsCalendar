import React from 'react';

// loading the sass style fot the component
import css from './Loader.module.scss';

/**
 * Atom Loader
 *
 * <!-- TODO: add a description here! -->
 */
function Loader (props) {
  const {
    className = "",
    full = false,
    center,
    children,
    ...other
  } = props;

  return <div
    className={`${css["atom__loader-container"]} ${className}`}
    data-full={full ? 1 : null}
    data-center={center ? 1 : null}
    {...other}
  >
    <div className={css["lds-spinner"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={css["text-container"]}>
      {children}
    </div>
  </div>;
}

export default Loader;
