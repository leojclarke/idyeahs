import React from 'react'
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

export default function IdeasFeed({ posts }) {
  return (
    <IdeasList>
      <StyledInput />
      <StyledTextArea />
      <StyledButton>SUBMIT IDEA</StyledButton>
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
