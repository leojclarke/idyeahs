import React from 'react';

export default function Dropdown({
  name,
  placeholder,
  options,
  label,
  styles,
}) {
  return (
    <Select
      name={name}
      placeholder={placeholder}
      label={label}
      options={options}
      styles={styles}
    />
  );
}
