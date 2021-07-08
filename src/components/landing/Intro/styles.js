import styled from "styled-components"
import overlayIllustration from "assets/illustrations/overlay.svg"

export const Wrapper = styled.div`
  background-image: url(${overlayIllustration});
  padding-bottom: 3rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
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
  .topics {
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
  .topics:before {
    content: "";
    animation: animate infinite 12s;
  }
  @keyframes animate {
    0% {
      content: "Machine Learning";
    }
    20% {
      content: "Artificial Intelligence";
    }
    40% {
      content: "Data Analytics";
    }
    60% {
      content: "Data Visualization";
    }
    80% {
      content: "Data Curation";
    }
    100% {
      content: "Web Development";
    }
  }

  .topics {
    font-size: 50px;
    font-weight: bolder;
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
