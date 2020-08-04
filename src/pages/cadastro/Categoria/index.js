import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const [categorias, setCategoria] = useState([]);
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);
  useEffect(() => {
    const URL_BACK = window.location.href.includes('localhost')
      ? 'http://localhost:3001/categorias'
      : 'https://grimoriumverum.herokuapp.com/categorias';
    fetch(URL_BACK)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategoria([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria
        :
        {' '}
        {values.title}
      </h1>
      <form
        onSubmit={function HandleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategoria([...categorias, values]);
          clearForm(initialValues);
        }}
      >
        <FormField
          label="Nome da Categoria"
          value={values.title}
          onChange={handleChange}
          type="text"
          name="title"
        />

        <FormField
          label="Descrição"
          value={values.description}
          onChange={handleChange}
          type="textarea"
          name="description"
        />

        <FormField
          label="cor"
          value={values.color}
          onChange={handleChange}
          type="color"
          name="color"
        />

        <Button>
          cadastro
        </Button>
      </form>
      {categorias.length === 0 && (
        <div>
          loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.title}`}>{categoria.title}</li>
        ))}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
