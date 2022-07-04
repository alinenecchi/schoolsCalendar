import React from "react";
import Card from "../../molecules/card";
import Button from "../../molecules/button-horizontal";
import css from "./section-card.module.scss";

/**
 * Organism SectionCard
 *
 * <!-- TODO: add a description here! -->
 */
function SectionCard(props) {
  const { className = "", dataCard, children, ...other } = props;

  const [show, setShow] = React.useState(false);

  function isShow() {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

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
              text2={ show ? card.text2 : null}
            >
              <Button
                onClick={isShow}
                className={css["button"]}
                style="transparent"
              >
                Mostrar { !show ? 'mais ...' : 'menos'}
              </Button>
            </Card>
          );
        })}
      </div>
      {children}
    </div>
  );
}

export default SectionCard;
