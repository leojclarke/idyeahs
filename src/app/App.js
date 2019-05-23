import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from '../misc/GlobalStyles'

const Grid = styled.div`
  display: grid;
`

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Route exact path="/" render={() => <h1>Home</h1>} />
      </Grid>
    </Router>
  )
}
