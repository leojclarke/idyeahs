import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { setLocal, getLocal } from './services'

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
  const [ideas, setIdeas] = useState(getLocal('ideas') || [''])

  function handlePost(title, text) {
    const newPost = {
      title: title,
      text: text,
    }
    setIdeas([...ideas, newPost])
  }

  useEffect(() => setLocal('ideas'))

  return (
    <Grid>
      <GlobalStyles />
      <Header />
      <IdeasFeed />
      <form onSubmit={handlePost} />
      <Footer />
    </Grid>
  )
}
