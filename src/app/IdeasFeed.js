import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import IdeaPost from './IdeaPost'

const IdeasList = styled.div`
  display: grid;
  padding: 10px 10px;
  color: white;
  overflow: scroll;
`

const StyledInput = styled.input`
  margin: 0 0 5px 0;
  padding: 5px;
  border: 1px solid lightslategray;
  font-size: 1.3em;
`

const StyledTextArea = styled.textarea`
  margin: 0 0 5px 0;
  padding: 5px;
  height: 80px;
  font-size: 1.3em;
  border: 1px solid lightslategray;
`
const StyledButton = styled.button`
  margin: 0 0 5px 0;
  padding: 5px;
  background: rebeccapurple;
  color: white;
  border: 1px solid lightslategray;
  font-size: 1.3em;
`

const StyledForm = styled.form``

export default function IdeasFeed({ posts }) {
  function onPost(event) {
    event.preventDefault()
    const form = event.target
    const title = form.title.value
    const text = form.description.value
    handlePost(title, text)
    form.reset()
  }

  return (
    <IdeasList>
      <StyledForm onSubmit={onPost}>
        <StyledInput />
        <StyledTextArea />
        <StyledButton>SUBMIT IDEA</StyledButton>
      </StyledForm>
      {posts.map(post => (
        <IdeaPost
          key={post.id}
          title={post.title}
          text={post.text}
          category={post.category}
        />
      ))}
    </IdeasList>
  )
}
