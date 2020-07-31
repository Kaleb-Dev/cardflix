/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import FormField from '../../FormField';
import PageTemplate from '../../PageTemplate/index';
import Button from '../../PageTemplate/Menu/Button/style'

const H1 = styled.h1`
    font-family: 'Roboto', sans-serif;
`;

const Home = styled.a`
  font-size: 12pt;
  position: relative;
  display: inline;
  transition: .2s;
&:hover,
&:focus {
  opacity: 75%;
}
`

function CategoriaCadastro() {
  const InitialsValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categoryName, setCategoryName] = useState(InitialsValues);
  const [categories, setCategories] = useState([]);

  function setValues(keys, values) {
    setCategoryName({
      ...categoryName,
      [keys]: values,
    });
  }

  function handleChange(eventInfo) {
    setValues(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  useEffect(() => { // causes a side effect
    console.log('Fala dev') // 1° Parameter - what will happen
    const data_URL = 'http://localhost:8080/categorias'
    fetch(data_URL)
    .then(async (serverResponse) => {
      const response = await serverResponse.json()
      setCategories([
        ...response,
      ])
    })
  }, [ // 2° Parameter is a array - when will happen
    
  ])

  return (
    <PageTemplate>
      <Link to="/"><Home>Volte para Home</Home></Link>
      <H1>
        Cadastro de Categorias:
        {categoryName.name}
      </H1>
      <div className="category-form">
        <form onSubmit={function handleSubmit(eventInfo) {
          eventInfo.preventDefault();
          setCategories([
            ...categories,
            categoryName,
          ]);
          setCategoryName(InitialsValues);
        }}
        >

          <FormField
            textAreaOrNot="0"
            label="Nome da Categoria: "
            value={categoryName.name}
            onChange={handleChange}
            type="input"
            name="name"
          />

          <FormField
            textAreaOrNot="1"
            label="Descrição: "
            value={categoryName.description}
            onChange={handleChange}
            type="textarea"
            name="description"
          />

          {/* <FormField
            textAreaOrNot="0"
            label="Cor: "
            value={categoryName.color}
            onChange={handleChange}
            type="color"
            name="color"
          /> */}

          <Button> Cadastrar </Button>
        </form>

        {categories.length === 0 && <div>
          Loading...
        </div>}
        
        <ul>
          {categories.map((category, index) => {
            return (
              <li key={category, index}>
                {`${category.name}`}
              </li>
            );
          })}
        </ul>
      </div>

    </PageTemplate>
  );
}

export default CategoriaCadastro;
