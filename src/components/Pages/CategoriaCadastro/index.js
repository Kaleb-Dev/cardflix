import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import FormField from '../../FormField';
import PageTemplate from '../../PageTemplate/index';
import {Button, Button_delete} from '../../PageTemplate/Menu/Button/style'
import { H1, Home, Table} from './style'

function useForm() {

}

function CategoriaCadastro() {
  const InitialsValues = {
    name: '',
    description: '',
  };

const [errors, setErrors] = useState({});
const [categoryName, setCategoryName] = useState(InitialsValues);
const [categories, setCategories] = useState([]);

function Validate(value) {
  const errors = {}
  if (value.name.length == 0) {
    errors.inputName = '*Esse campo é obrigatório'
  }
  if (value.description.length == 0) {
    errors.inputDescription = '*Esse campo é obrigatório'
  }
  return errors
}

  useEffect(() => {
    setErrors(Validate(categoryName))
  }, 2 * 2000 [categoryName])


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
    const data_URL = window.location.hostname.includes('localhost')  // 1° Parameter - what will happen
    ?'http://localhost:8080/categorias'
    :'https://cardflix-data.herokuapp.com/categorias'

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
      {/* <Link to="/"><Home>Volte para Home</Home></Link> */}
      <H1>
        Nova Categoria&nbsp;<br></br>
      </H1>
      <div className="category-form">
        <form autoComplete='off' onSubmit={function handleSubmit(eventInfo) {
          eventInfo.preventDefault();
          if (categoryName.name && categoryName.description.length != 0) {
            setCategories([
              ...categories,
              categoryName,
            ]);
          }
         

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
            span_text={errors.inputName}
          />


          <FormField
            textAreaOrNot="1"
            label="Descrição: "
            value={categoryName.description}
            onChange={handleChange}
            type="textarea"
            name="description"
            span_text={errors.inputDescription}
          />
           <Button> Cadastrar </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Button_delete onClick={() => setCategoryName(InitialsValues)}> Excluir </Button_delete>
        </form>

        {categories.length === 0 && <div>
          Loading...
        </div>}
          
          {categories.map((category, index) => {
            return (
              <Table key={category, index}>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Editar</th>
                  <th>Remover</th>
                </tr>
                <tr>
                  <td>{`${category.name}`}</td>
                  <td>{`${category.description}`}</td>
                  <td>Editar</td>
                  <td>Remover</td>
                </tr>
              </Table>
            );
          })}
      </div>

    </PageTemplate>
  );
}

export default CategoriaCadastro;
