import React from 'react';

const StyledSelect = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;

  &:before,
  &:after {
    content: '';
    position: absolute;
  }

  select {
    color: darkslategray;
    cursor: pointer;
    background: rgba(white, 0.3);
    border: 2px solid white;
    width: 100%;
    font-size: 0.8em;
    line-height: 1.3rem;
    padding: 0.5em;
    padding-right: 2em;
    appearance: none;
    display: flex;
    flex-direction: column;
    height: 40px;
    padding: 0 5px;
    border-radius: 3px;
    border: 1px solid #008dff;
    font-size: 0.8em;
    line-height: 1.3rem;
    color: darkslategrey;
    box-sizing: content-box;
    font-family: Roboto, Arial, Helvetica, sans-serif;

    ::placeholder {
      color: lightslategrey;
      font-size: 0.8rem;
    }
  }
`;

export default function Dropdown({
  name,
  placeholder,
  options,
  label,
  styles,
}) {
  return (
    <StyledSelect
      name={name}
      placeholder={placeholder}
      label={label}
      options={options}
      styles={styles}
    />
  );
}
