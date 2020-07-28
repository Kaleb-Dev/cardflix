import React from 'react'
import PageTemplate from '../../PageTemplate'
import { Link } from 'react-router-dom'
 
function CadastroVideo() {
    return (
        <PageTemplate>
            <h1>
                Cadastro de Categorias
            </h1>
            <Link to="/cadastro/categoria">Edite as categorias</Link>
        </PageTemplate>
    )
}

export default CadastroVideo;