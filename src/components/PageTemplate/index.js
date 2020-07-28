import React from 'react'
import Menu_header from './Menu'
import Footer from './Footer'
import styled from 'styled-components'

const Main = styled.main `
    background-color: var(--black);
    color: var(--white);
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    flex: 1px;
`

function PageTemplate ({ children }) {
    return (
        <>
            <Menu_header />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    )
}

export default PageTemplate