import React from "react";
import Link from "next/link";
import Title from "../../atoms/title";
import Card from "../../molecules/card";
import Button from "../../molecules/button-horizontal";
import css from "./section-info.module.scss";

/**
 * Organism SectionInfo
 *
 * <!-- TODO: add a description here! -->
 */
function SectionInfo(props) {
  const { className = "", dataInfo, children, ...other } = props;

  return (
    <div
      className={`${css["organism__section-info-container"]} ${className}`}
      {...other}
    >
      <div className={css["container"]}>
        <Title className={css["title"]}>{dataInfo.title}</Title>
        <span className={css["text"]}>{dataInfo.text}</span>

        <div className={css["card-container"]}>
          {dataInfo.dataCard.map((card) => {
            return (
              <Card
                key={card.title}
                icon={card.icon}
                title={card.title}
                text={card.text}
                style="info"
              >
                <Link href={card.href}>
                  <a title={card.Title}>
                    <Button className={css["button"]} style="transparent">Saiba mais</Button>
                  </a>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>

      {children}
    </div>
  );
}

export default SectionInfo;
