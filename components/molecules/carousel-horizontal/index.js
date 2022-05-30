/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import Title from "../../atoms/title";
import LeftArrow from "../../icons/ArrowLeft";
import RightArrow from "../../icons/ArrowRight";
import css from "./carousel.module.scss";

/**
 * Molecule CarouselVehicles
 *
 * <!-- TODO: add a description here! -->
 */
function CarouselHorizontal(props) {
  const {
    className = "",
    images = [],
    title,
    text,
    onClickImage,
    LogoIcon,
    AltIcon,
    style,
    children,
    ...other
  } = props;

  const carouslRef = useRef(null);

  const prev = () => {
    carouslRef &&
      carouslRef.current &&
      carouslRef.current.scrollTo({
        behavior: "smooth",
        top: 0,
        left:
          carouslRef.current.scrollLeft - carouslRef.current.clientWidth * 1,
      });
  };

  const next = () => {
    carouslRef &&
      carouslRef.current &&
      carouslRef.current.scrollTo({
        behavior: "smooth",
        top: 0,
        left:
          carouslRef.current.scrollLeft + carouslRef.current.clientWidth * 1,
      });
  };

  return (
    <div
      className={`${css["molecule__carousel-horizontal-container"]} ${className}`}
      data-style={style}
      {...other}
    >
      <Title>{title}</Title>
      <span className={css.text}>{text}</span>
      <div className={css.carousel}>
        {images.length > 1  &&(
          <button className={css.direction} onClick={prev}>
            <LeftArrow className={css.arrow} />
          </button>
        )}
        <div className={css["card-div"]}>
          <main className={css["card-scroll"]} ref={carouslRef}>
            {images.map((entry) => {
              return (
                <>
                  <div className={css["img"]}>
                    <img
                      key={entry.url}
                      src={entry.url}
                      alt={entry.alt}
                      onClick={onClickImage}
                    />
                  </div>
                </>
              );
            })}
          </main>
        </div>
        {images.length > 1 && (
          <button className={css.direction} onClick={next}>
            <RightArrow className={css.arrow} />
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export default CarouselHorizontal;
