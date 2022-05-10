import React from 'react';

// loading the sass style fot the component
import css from './WarningCircle.module.scss';

/**
 * Atom WarningCircle
 *
 * <!-- TODO: add a description here! -->
 */
function WarningCircle (props) {
  const {
    className = "",
    style,
    children,
    ...other
  } = props;

  return <div
    className={`${css["atom__warning-circle-container"]} ${className}`}
    data-style={style}
    {...other}
  >
    <div className={css.circleBorder}>
      <div className={css.circle}>
        <span className={css["f-modal-body"]}></span>
        <span className={css["f-modal-dot"]}></span>
      </div>
    </div>


    {children}
  </div>;
}

export default WarningCircle;
