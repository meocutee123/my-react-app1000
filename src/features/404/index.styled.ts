import styled from "styled-components";

export const StyledContainer = styled.div`
  background-image: url("./plane-crash.png");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > .four-oh-four {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    & > span {
      font-size: 116px;
      font-weight: 700;
      line-height: 140px;
      font-family: 'Antonio', sans-serif;
      margin-right: 20px;
    }
     & > div {
      display: flex;
      flex-direction: column;
      span:first-child {
        font-size: 48px;
        font-weight: 700;
        line-height: 62px;
        margin-bottom: 10px;
        font-family: 'Antonio', sans-serif;
      }
      span:last-child {
        font-size: 20px;
        line-height: 29px;
      }
     }
  }
  a {
    font-size: 15px;
    text-transform: uppercase;
    color: #1976D2;
    font-weight: 500;
    line-height: 26px;
    text-decoration: none;
    > span {
      display: inline-block;
      align-items: center;
      svg {
        margin-left: 8px;
        transform: translateY(3px)
      }
    }
  }

  @media screen and (max-width: 500px){
    .four-oh-four {
      flex-direction: column;
    }
  }
`