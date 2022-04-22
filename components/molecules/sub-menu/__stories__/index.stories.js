import React from 'react';
import SubMenu from '../';

import css from './styles.scss';

export default {
  title: 'Molecules/SubMenu',
  argTypes: {
    // TODO: add your props here (reference: https://storybook.js.org/docs/react/essentials/controls#annotation)
  }
};

function SubMenuEl () {
  // keep the `className="molecule__sub-menu-el-container"` in the root element
  // for unit tests to pass, checking your story rendering process
  return <div style={{height: '100%'}} className={css["molecule__sub-menu-el-container"]}>
    <SubMenu link1="Veículos Seminovos" link2="Veículos Novos"
    />
  </div>;
}

// SubMenuEl.parameters = {
//   design: {
//     type: 'figma',
//     url: "add a url for the figma project here"
//   },
// };

export {
  SubMenuEl as SubMenu
};
