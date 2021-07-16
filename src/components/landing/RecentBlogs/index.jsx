import React from "react"
import styled from "styled-components"
import { Recent, TagsList } from "components/common"

export const RecentPosts = () => {
  return (
    <Wrapper>
      <Container>
        <Recent />
        <TagsList />
      </Container>
    </Wrapper>
  )
}

//Styled Components

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-width: 10rem;
  max-width: 80rem;
`

const Wrapper = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
`
