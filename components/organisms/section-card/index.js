import React from "react";
import Card from "../../molecules/card";
import css from "./section-card.module.scss";

/**
 * Organism SectionCard
 *
 * <!-- TODO: add a description here! -->
 */
function SectionCard(props) {
  const { className = "", dataCard, children, ...other } = props;

  return (
    <div
      className={`${css["organism__section-card-container"]} ${className}`}
      {...other}
    >
      <div className={css["card-container"]}>
        {dataCard.map((card) => {
          return (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}

export default SectionCard;
