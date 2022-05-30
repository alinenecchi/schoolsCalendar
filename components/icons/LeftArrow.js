import * as React from 'react';

function SvgLeftArrow(props) {
  return (
    <svg width={10} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 1l-8 9 8 9" stroke="#EBF4F6" />
    </svg>
  );
}

export default SvgLeftArrow;
