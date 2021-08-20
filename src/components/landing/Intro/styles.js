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

  h4 {
    margin-bottom: 0;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#e6e6e6")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "difference" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }

  .topics:before {
    content: "";
    animation: animate infinite 10s;
    animation-delay: 0.2s;
  }

  .topics {
    font-size: 45px;
    font-weight: bolder;
    letter-spacing: 1px;
    background: yellow;
    color: black;
    @media (max-width: 680px) {
      font-size: 26pt;
    }
    @media (max-width: 320px) {
      font-size: 20pt;
    }
  }

  @keyframes animate {
    from {
      content: "Machine Learning";
    }
    25% {
      content: "Data Analytics";
    }
    50% {
      content: "Data Visualization";
    }
    75% {
      content: "Web Development";
    }
    to {
      content: "Model Deployment";
    }
  }
`

export const Thumbnail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    img {
      margin-top: 25px;
    }

    width: 100%;
  }

  img {
    width: 80%;
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
`
