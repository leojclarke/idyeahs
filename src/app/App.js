import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from '../misc/GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import IdeasList from './IdeasEntriesList'

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 80px auto 70px;
`

export default function App() {
  // const [ideas, setIdeas] = useState([
  //   {
  //     title: 'My Great Idea',
  //     text: 'lorum ipsum blah',
  //   },
  //   {
  //     title: 'My Other Great Idea',
  //     text: 'lorum ipsumsöl asüdifj asoifh asoüdfigh blah',
  //   },
  // ])

  return (
    <Grid>
      <GlobalStyles />
      <Header />
      <IdeasList />
      <Footer />
    </Grid>
  )
}
