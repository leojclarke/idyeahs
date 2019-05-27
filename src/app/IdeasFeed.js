import React from 'react'
import styled from 'styled-components'
import IdeaPost from './IdeaPost'

const IdeasList = styled.div`
  padding: 10px 10px;
  color: white;
  overflow: scroll;
`

export default function IdeasFeed({ posts }) {
  return (
    <IdeasList>
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
