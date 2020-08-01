import styled from "styled-components"

export const Button = styled.button `
    font-family: 'Bebas Neue', cursive;
    color: var(--white);
    background: var(--black);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: .2s;
  }
  &:hover,
  &:focus {
    background-color: var(--white);
    color: var(--black);
    transform: scale(1.1);
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

export const Button_delete = styled.button `
    font-family: 'Bebas Neue', cursive;
    color: var(--white);
    background: #EA0707;
    border: 1px var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: .2s;
  }
  &:active{
    transform: scale(0.85);
  }
  &:disabled{
    transform: scale(1);
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