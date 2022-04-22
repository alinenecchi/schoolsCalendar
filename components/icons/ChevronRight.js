import * as React from 'react';

function SvgChevronRight(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <path
        d="M7.707 21.707L7 21l9.146-9.147L7 2.707 7.707 2l9.854 9.853z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevronRight;
