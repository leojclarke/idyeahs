import React from 'react'
import styled from 'styled-components'
import IdeaEntry from './IdeaEntry'

const IdeasEntriesList = styled.section`
  padding: 10px 10px;
  color: white;
  overflow: scroll;
`

export default function IdeasList() {
  return (
    <IdeasEntriesList>
      <IdeaEntry 
      title="My Great Idea" 
      text="Everything Begins With An Idea" />
      <IdeaEntry 
      title="My Other Great Idea" 
      text="No Matter What People Tell You, Words And Ideas Can Change The World" />
      <IdeaEntry 
      title="My Great Idea" 
      text="Everything Begins With An Idea" />
      <IdeaEntry 
      title="My Other Great Idea" 
      text="No Matter What People Tell You, Words And Ideas Can Change The World" />
      <IdeaEntry 
      title="My Great Idea" 
      text="Everything Begins With An Idea" />
      <IdeaEntry 
      title="My Other Great Idea" 
      text="No Matter What People Tell You, Words And Ideas Can Change The World" />
    </IdeasEntriesList>
  )
}
