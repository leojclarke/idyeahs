import React from 'react'
import styled from 'styled-components'

const IdeaContainer = styled.div`
  padding: 20px;
  margin: 10px 0px;
  background: rebeccapurple;
`
const IdeaTitle = styled.h2`
  font-size: 1.2em;
`
const IdeaText = styled.p`
  font-size: 0.8em;
`

export default function IdeaEntry({ title, text }) {
  return (
    <IdeaContainer>
      <IdeaTitle>{title}</IdeaTitle>
      <IdeaText>{text}</IdeaText>
    </IdeaContainer>
  )
}
