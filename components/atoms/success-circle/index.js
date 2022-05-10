import React from 'react';

// loading the sass style fot the component
import css from './SuccessCircle.module.scss';

/**
 * Atom SuccessCircle
 *
 * <!-- TODO: add a description here! -->
 */
function SuccessCircle (props) {
  const {
    className = "",
    style,
    children,
    ...other
  } = props;

  return <div
    className={`${css["atom__success-circle-container"]} ${className}`}
    data-style={style}
    {...other}
  >
    <div className={css.circleBorder}>
      <div className={css.circle}>
        <div className={css.success}></div>
      </div>
    </div>

    {children}
  </div>;
}

export default SuccessCircle;
