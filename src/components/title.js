import styled, { css } from "styled-components";

export default styled.h1`
  margin: 0 0 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 30px;
  color: #0b59d7;
  letter-spacing: 0;
  text-shadow: -14px 9px 0 rgba(11, 89, 214, 0.1);

  @media (min-width: 500px) {
    .title {
      margin: 0 0 2rem;
      font-size: 45px;
    }
  }

  ${props =>
    props.white &&
    css`
      color: white;
    `};
`;
