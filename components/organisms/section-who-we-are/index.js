/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Title from "../../atoms/title";
import Button from "../../molecules/button-horizontal";
import css from "./section-who-we-are.module.scss";
import LineLarge  from "../../icons/line-large";

/**
 * Organism SectionWhoWeAre
 *
 * <!-- TODO: add a description here! -->
 */
function SectionWhoWeAre(props) {
  const {
    className = "",
    data,
    children,
    ...other
  } = props;

  return (
    <div
      className={`${css["organism__section-who-we-are-container"]} ${className}`}
      {...other}
    >
      <div className={css["container"]}>
        <div className={css["column1"]}>
          <LineLarge/>
          <Title className={css["title"]}>{data.title}</Title>
          <span className={css["text"]}>{data.text}</span>
          <Link href="/who-we-are">
            <a title="Quem somos">
              <Button style="transparent">Saiba mais</Button>
            </a>
          </Link>
        </div>
        <div className={css["column2"]}>
          <img src={data.image} alt={data.alt} />
        </div>
      </div>
      {children}
    </div>
  );
}

export default SectionWhoWeAre;
