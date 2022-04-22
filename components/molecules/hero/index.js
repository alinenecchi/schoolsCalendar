import React from 'react';

// loading the sass style fot the component
import css from './hero.module.scss';

/**
 * Molecule Hero
 * 
 * <!-- TODO: add a description here! -->
 */
function Hero (props) {
  const {
    className = "",
    image = "/images/banner-hero.png",
    LogoIcon = '',
    style,
    children,
    ...other
  } = props;

  return <div
    className={`${css["molecule__hero-container"]} ${className}`}
    data-style={style}
    {...other}
  >
    <div
      className={css["bg-image"]}
      style={{
        backgroundImage: `url(${image})`
      }}
    >
    </div>
    <div className={css["content"]}>
      <div className={css["content-container"]}>
        <div className={css["logo-container"]}>
          logo
        </div>
        <div className={css["content-text"]}>
          {children}
        </div>
      </div>
    </div>
  </div>;
}

export default Hero;
