import React from "react"
import styled from "styled-components"
import stack from "../../../data/stack.json"

export const Stack = () => {
  return (
    <Wrapper>
      <div>
        <p>STACK USED HERE </p>
      </div>
      <Stacks>
        {stack.map(({ id, name, icon }) => (
          <img key={id} src={icon} alt={name} />
        ))}
      </Stacks>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin: 0% 10%;
  margin-bottom: 2%;

  p {
    font-weight: bold;
    margin-bottom: 0px;
    margin-left: 10px;
  }

  @media (max-width: 960px) {
    margin: 0% 3%;
  }
`

export const Stacks = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 10px;
    max-width: 50px;
    min-width: 30px;
  }
`
