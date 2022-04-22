import React from 'react';
import ButtonHorizontal from '../';

import css from './styles.scss';

export default {
  title: 'Molecules/ButtonHorizontal',
  argTypes: {
    // TODO: add your props here (reference: https://storybook.js.org/docs/react/essentials/controls#annotation)
  }
};

function clicked() {
  return alert("The button was pressed");
}

export function DarkButton () {
  // keep the `className="molecule__button-horizontal-el-container"` in the root element
  // for unit tests to pass, checking your story rendering process
  return <div style={{height: '100%'}} className={css["molecule__button-horizontal-el-container"]}>
    <ButtonHorizontal style="blue" clickEvent={clicked}>Botão</ButtonHorizontal>
  </div>;
}

export function LightButton () {
  // keep the `className="molecule__button-horizontal-el-container"` in the root element
  // for unit tests to pass, checking your story rendering process
  return <div style={{height: '100%'}} className={css["molecule__button-horizontal-el-container"]}>
    <ButtonHorizontal style="white" clickEvent={clicked}>Botão</ButtonHorizontal>
  </div>;
}

export function OutlinedButton () {
  // keep the `className="molecule__button-horizontal-el-container"` in the root element
  // for unit tests to pass, checking your story rendering process
  return <div style={{height: '100%'}} className={css["molecule__button-horizontal-el-container"]}>
    <ButtonHorizontal style="outline" clickEvent={clicked}>Botão</ButtonHorizontal>
  </div>;
}
export function MapButton () {
  // keep the `className="molecule__button-horizontal-el-container"` in the root element
  // for unit tests to pass, checking your story rendering process
  return <div style={{height: '100%'}} className={css["molecule__button-horizontal-el-container"]}>
    <ButtonHorizontal style="map" clickEvent={clicked}>Botão</ButtonHorizontal>
  </div>;
}

// ButtonHorizontalEl.parameters = {
//   design: {
//     type: 'figma',
//     url: "add a url for the figma project here"
//   },
// };