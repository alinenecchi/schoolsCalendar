import React from 'react';
import HeaderNav from '../';

import css from './styles.scss';

export default {
  title: 'Molecules/HeaderNav',
  argTypes: {
    // TODO: add your props here (reference: https://storybook.js.org/docs/react/essentials/controls#annotation)
  }
};

function HeaderNavEl () {
  // keep the `className="molecule__header-nav-el-container"` in the root element
  // for unit tests to pass, checking your story rendering process
  return <div style={{height: '100%'}} className={css["molecule__header-nav-el-container"]}>
    <HeaderNav />
  </div>;
}

// HeaderNavEl.parameters = {
//   design: {
//     type: 'figma',
//     url: "add a url for the figma project here"
//   },
// };

export {
  HeaderNavEl as HeaderNav
};
