import styled from "styled-components"
import overlayIllustration from "assets/illustrations/overlay.svg"

export const Wrapper = styled.div`
  background-image: url(${overlayIllustration});
  padding-bottom: 3rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  @media (max-width: 680px) {
    background-size: cover;
  }
`

export const IntroWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Details = styled.div`
  flex: 2;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4,
  li {
    margin-bottom: 0;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#e6e6e6")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
  div {
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: flex-start;
    height: 65px;
    margin-top: -10px;
    li {
      font-size: 50px;
      font-weight: bolder;
      padding: 0 0;
      height: 45px;
      margin-bottom: 45px;
      display: block;
      text-decoration: underline;
    }
  }
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  .flip2 {
    animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
  }
  .flip3 {
    animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
  }
  .flip4 {
    animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
  }

  @keyframes flip2 {
    0% {
      margin-top: -180px;
    }
    5% {
      margin-top: -90px;
    }
    50% {
      margin-top: -90px;
    }
    55% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }

  @keyframes flip3 {
    0% {
      margin-top: -270px;
    }
    5% {
      margin-top: -180px;
    }
    33% {
      margin-top: -180px;
    }
    38% {
      margin-top: -90px;
    }
    66% {
      margin-top: -90px;
    }
    71% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }

  @keyframes flip4 {
    0% {
      margin-top: -360px;
    }
    5% {
      margin-top: -270px;
    }
    25% {
      margin-top: -270px;
    }
    30% {
      margin-top: -180px;
    }
    50% {
      margin-top: -180px;
    }
    55% {
      margin-top: -90px;
    }
    75% {
      margin-top: -90px;
    }
    80% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }
`

export const Thumbnail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 80%;
  }
`
