import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyles from '../misc/GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import IdeasFeed from './IdeasFeed'

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 80px auto 70px;
`
export default function App() {
  const ideas = [
    {
      title: 'My Great Idea',
      text: 'Everything Begins With An Idea',
    },
    {
      title: 'My Other Great Idea',
      text:
        'No Matter What People Tell You, Words And Ideas Can Change The World',
    },
    {
      title: 'My Great Idea',
      text: 'Everything Begins With An Idea',
    },
    {
      title: 'My Other Great Idea',
      text:
        'No Matter What People Tell You, Words And Ideas Can Change The World',
    },
  ]

  return (
    <Grid>
      <GlobalStyles />
      <Header />
      <IdeasFeed posts={ideas} />
      <Footer />
    </Grid>
  )
}
