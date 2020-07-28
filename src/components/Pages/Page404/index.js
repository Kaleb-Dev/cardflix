import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PageTemplate from '../../PageTemplate/index.js'


function page404({children}) {
    return (
        <PageTemplate>
            <h1>Error 404</h1>
        </PageTemplate>
    )
}

export default page404