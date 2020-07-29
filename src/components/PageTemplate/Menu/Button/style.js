import styled from "styled-components"

const Button = styled.button `
    font-family: 'Roboto' sans-serif;
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: .3s;
  }
  &:hover,
  &:focus {
    background-color: white;
    color: var(--black)
  }
  
  @media (max-width: 800px) {
    & {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 1px solid var(--primary);
      text-align: center;
      transition: 0.2s;
    }
    &:hover,
    &:focus {
        border: 10px solid var(--black);
        background: var(--black);
        color: var(--white)
    }
`

export default Button;