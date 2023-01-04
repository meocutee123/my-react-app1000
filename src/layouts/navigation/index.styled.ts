import styled from "styled-components";

export const StyledContainer = styled.div`
  ul {
    display: flex;
    justify-content: space-evenly;
    li {
      cursor: pointer;
      list-style: none;
    }
  }

  .active {
    color: limegreen;
  }
`