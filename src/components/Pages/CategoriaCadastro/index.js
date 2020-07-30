import React, { useState } from 'react'
import FormField from '../../../components/FormField'
import PageTemplate from '../../PageTemplate/index'
import styled from 'styled-components'
const H1 = styled.h1 `
    font-family: 'Roboto', sans-serif;
`


function CategoriaCadastro() {
    const InitialsValues = {
        name: "",
        description: "",
        color: ""
    }
    const [categoryName, setCategoryName] = useState(InitialsValues)
    const [categories, setCategories] = useState([])

    function setValues(keys, values) {
        setCategoryName({
            ...categoryName,
            [keys]: values,
        })
    }

    function handleChange(eventInfo){ 
        setValues(
            eventInfo.target.getAttribute('name'),
            eventInfo.target.value
        )
    }

    return (
        <PageTemplate>
            <H1>Cadastro de Categorias: {categoryName.name}</H1>
            <div className="category-form">
                <form onSubmit={function handleSubmit(eventInfo) {
                    eventInfo.preventDefault()
                    setCategories([
                        ...categories,
                        categoryName,
                    ])
                    setCategoryName(InitialsValues)

                }}>

                    <FormField 
                        textAreaOrNot="0"
                        label="Nome da Categoria: "
                        value={categoryName.name}
                        onChange={handleChange}
                        type=""
                        name="name"
                    />
                
                    <FormField 
                        textAreaOrNot="1"
                        label="Descrição: "
                        value={categoryName.description}
                        onChange={handleChange}
                        type=""
                        name="description"
                    />
                    

                    <FormField 
                        textAreaOrNot="0"
                        label="Cor: "
                        value={categoryName.color}
                        onChange={handleChange}
                        type="color"
                        name="color"
                    />

                    <button> Cadastrar </button>
                </form>

                <ul>
                    {categories.map((category, index) => {
                        console.log('[categoria]',category, '[index]',index)
                        return (
                            <li key={category, index}>
                                {`${category.name}`}
                            </li>
                        )
                    })}
                </ul>
            </div>
                    
        </PageTemplate>
    )
}

export default CategoriaCadastro