import styled from "styled-components"

export const Wrapper = styled.div`
  font-family: "Wotfard-regular";
  background-color: #2f2e33;

  @media (max-width: 1960px) {
    padding: 6rem 0 4rem;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }

  @media (max-width: 960px) {
    justify-content: center;
  }
`

export const Details = styled.div`
  h2,
  a,
  span {
    color: #fff;
  }

  @media (max-width: 960px) {
    margin-bottom: 2rem;
  }
`
