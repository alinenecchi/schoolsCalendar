import React from 'react';
import InputRX from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// loading the sass style fot the component
import css from './input.module.scss';

function TextMaskCustom (props) {
  const {
    mask,
    maskChar,
    inputRef,
    ...other
  } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        if (inputRef) {
          inputRef(ref ? ref.inputElement : null);
        }
      }}
      // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      mask={mask}
      className={css.masked}
      // mask={mask}
      placeholderChar={maskChar}
      // showMask
    />
  );
}

/**
 * Atom Input
 * 
 * <!-- TODO: add a description here! -->
 */
function Input (props) {
  const {
    className = "",
    helperText = " ",
    value = "",
    children,
    disabled,
    mask = null,
    maskChar = "_",
    inputRef,
    label = "",
    id,
    name,
    onChange,
    required,
    ...other
  } = props;

  if (mask) {
    return (
      <FormControl className={`${css["atom__input-container"]} ${className}`} required={required}>
        <InputLabel htmlFor={(id || name || label)}>{label}</InputLabel>
        <InputRX
          value={value}
          onChange={onChange}
          id={(id || name || label)}
          name={name || null}
          inputComponent={TextMaskCustom}
          inputProps={{
            mask,
            maskChar
          }}
          {...other}
        />
      </FormControl>
    );
  } else {
    return (
      <TextField
        className={`${css["atom__input-container"]} ${className}`}
        helperText={helperText}
        value={onChange ? value : undefined}
        onChange={onChange || undefined}
        disabled={!!disabled}
        label={label}
        required={required}
        id={id}
        name={name}
        {...other}
      />
    );
  }


}

export default Input;
