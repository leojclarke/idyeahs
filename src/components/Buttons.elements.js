import styled from 'styled-components'
import SubmitButton from './form/SubmitButton'

export const ButtonTransparent = styled(SubmitButton)`
  background: transparent;
  border: 1px solid #008dff;
  color: #008dff;
`;

export const ButtonFilled = styled(SubmitButton)`
  background: white;
  color: #008dff;
  border: none;
`;