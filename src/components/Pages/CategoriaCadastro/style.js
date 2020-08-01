import styled, { css } from 'styled-components'


export const H1 = styled.h1`
    text-align: center;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    padding-bottom: 50px;
`;

export const Home = styled.a`
    text-align: center;
    font-size: 12pt;
    position: relative;
    display: inline;
    transition: .2s;
    &:hover,
    &:focus {
    opacity: 75%;
}
`
export const Table = styled.table`
    padding-top: 10px;
    align-content: center;
    text-align: center;
    border-collapse: collapse;
    position: relative;
    width: 100%;
    &, th, td {
        padding-bottom: 5px;
        height: 50%;
        border: 1px solid white;
    }
    th{
        font-size: 20pt;
        font-weight: 400;
    }
`