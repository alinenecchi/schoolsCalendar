import React from 'react';
import ButtonHorizontal from '../button-horizontal';

// loading the sass style fot the component
import css from './ModalConfirmation.module.scss';

/**
 * Molecule ModalConfirmation
 *
 * <!-- TODO: add a description here! -->
 */
function ModalConfirmation (props) {
  const {
    className = "",
    title,
    content,
    buttonText,// = "Fechar",
    onClick, // buttonOnClickEvent
    alert,
    style,
    children,
    ...other
  } = props;

  return <div
    className={`${css["molecule__modal-confirmation-container"]} ${className}`}
    data-style={style}
    {...other}
  >

    <div className={css["container"]} data-content-wrapper={true}>
      <div className={css["side"]}></div>
      <div className={css["box-container"]}>
        <div className={css['loader']}>{alert}</div>
        <span className={css['title']}>{title}</span>
        <span className={css['content']}>{content}</span>
        {
          buttonText
            ? (
              <ButtonHorizontal
                style="orange"
                className={css['button']}
                onClick={onClick}>
                <span className={css['span']}>{buttonText}</span>
              </ButtonHorizontal>
            )
            : <div><br/><br/></div>
        }
      </div>
    </div>
    {children}
  </div>;
}

export default ModalConfirmation;
