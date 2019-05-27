import React from 'react'
import styled from 'styled-components'

const Heading = styled.header`
  background: rgba(127, 183, 190, 1);
`
const Title = styled.h1`
  color: white;
  text-align: center;
`

export default function Header({ title }) {
  return (
    <Heading>
      <Title>Ideas</Title>
    </Heading>
  )
}
