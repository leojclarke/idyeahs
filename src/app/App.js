import React, { useState } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import uid from 'uid'
import GlobalStyles from '../misc/GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import IdeasFeed from './IdeasFeed'
import IdeaForm from './IdeaForm'

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 80px auto 70px;
`

const GridArea = styled.div`
  display: grid;
  padding: 10px 10px;
  color: white;
  overflow: scroll;
`

export default function App() {
  const [ideas, setIdeas] = useState([
    {
      id: uid(),
      title: 'My Great Idea',
      text: 'Everything Begins With An Idea',
      tags: ['sales'],
    },
    {
      id: uid(),
      title: 'My Other Great Idea',
      text:
        'No Matter What People Tell You, Words And Ideas Can Change The World',
      tags: ['events', 'logistics', 'boom'],
    },
  ])

  function onSubmitIdea(newIdea) {
    setIdeas([newIdea, ...ideas])
  }

  return (
    <Grid>
      <GlobalStyles />
      <Header />
      <GridArea>
        <IdeaForm onSubmitIdea={onSubmitIdea} />
        <IdeasFeed posts={ideas} />
      </GridArea>
      <Footer />
    </Grid>
  )
}
