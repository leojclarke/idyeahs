import React from 'react'
import styled from 'styled-components'

const StyledTag = styled.span`
  padding: 3px;
  background: rgba(127, 183, 190, 1);
  border-radius: 2px;
  font-size: 0.7em;
`
export default function Tag({ category }) {
  return <StyledTag>{category}</StyledTag>
}
