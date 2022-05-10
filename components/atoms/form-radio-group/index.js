import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useState } from 'react';

import css from './FormRadioGroup.module.scss';

function FormRadioGroup (props) {
  const {
    className = "",
    label = '',
    radioGroupName = '',
    radioGroupAriaLabel = '',
    list = [],
    selected = '',
    ...other
  } = props;

  const [selectedValue, setSelectedValue] = useState(selected);

  const handleOnChange = (value) => setSelectedValue(value?.target?.value);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" className={`${css["atom__form-radio-group-container"]} ${className}`} {...other} >{label}</FormLabel>
      <RadioGroup aria-label={radioGroupAriaLabel} name={radioGroupName} value={selectedValue} onChange={handleOnChange} >
        {list.length > 0 && list.map((status, index) => (
          <FormControlLabel key={index} value={status} control={<Radio checked={status === selected} />} label={status} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default FormRadioGroup;
