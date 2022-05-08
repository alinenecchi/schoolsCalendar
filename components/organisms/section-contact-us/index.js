import React from "react";
import Link from "next/link";
import Title from "../../atoms/title";
import Button from "../../molecules/button-horizontal";
import css from "./section-info.module.scss";

/**
 * Organism SectionContactUs
 *
 * <!-- TODO: add a description here! -->
 */
function SectionContactUs(props) {
  const { className = "", dataContact, children, ...other } = props;

  return (
    <div
      className={`${css["organism__section-contact-us-container"]} ${className}`}
      {...other}
    >
      <div className={css["container"]}>
        <Title className={css["title"]}>{dataContact.title}</Title>
        <span className={css["text"]}>{dataContact.text}</span>

        <div className={css["card-container"]}>
          <Link href={dataContact.href}>
            <a title={dataContact.title}>
              <Button className={css["button"]} style="transparent">
                {dataContact.buttonName}
              </Button>
            </a>
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}

export default SectionContactUs;
