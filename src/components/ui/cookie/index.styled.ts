import styled from "styled-components";

export const CookieNotice = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1045px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 21px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background: #FFFFFF;
  font-size: 16px;
  p {
    text-align: center;
    width: 100%;
  }
  svg {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 21px;
    transform: translateY(-50%)
  }
`