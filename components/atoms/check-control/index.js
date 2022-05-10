import React from 'react';

// loading the sass style fot the component
import css from './check-control.module.scss';

/**
 * Atom CheckControl
 * 
 * <!-- TODO: add a description here! -->
 */
function CheckControl (props) {
  const {
    className = "",
    children,
    onChange = _ => {},
    checked = false,
    radio = false,
    value = true,
    style,
    label = "",
    ...other
  } = props;

  return <div
    className={`${css["atom__check-control-container"]} ${className}`}
    data-style={style}
  >
    <label>
      <input
        type={radio ? 'radio' : "checkbox"}
        {...other}
        onChange={_ => {
          if (checked) {
            onChange(!checked);
          } else {
            onChange(value === undefined ? true : value);
          }
        }}
        checked={checked}
      />
      <div className={css["the-checkbox"]}></div>
      {
        checked
        ?
        <span className={css["label-check"]}>{label}</span>
        :
        <span>{label}</span>
      }
     
    </label>
  </div>;
}

export default CheckControl;
