import * as React from 'react';

function SvgMenu(props) {
  return (
    <svg width={30} height={28} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M34 0v4H0V0h34zM34 10v4H0v-4h34zM34 20v4H0v-4h34z" fill="#fff" />
    </svg>
  );
}

export default SvgMenu;