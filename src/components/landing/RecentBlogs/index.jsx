import React from "react"
import styled from "styled-components"
import { TopPosts, TagsList } from "components/common"

export const RecentPosts = () => {
  return (
    <Wrapper>
      <TopPosts />
      <TagsList />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0% 5%;

  @media (max-width: 960px) {
    margin: 0%;
  }

  @media (max-width: 680px) {
    margin: 0%;
  }
`
