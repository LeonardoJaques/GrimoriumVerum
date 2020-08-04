import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    title: 'Como fazer validações de formulário com React? #FailFastValidations | Formik Engenharia Reversa #02 ',
    url: 'https://www.youtube.com/watch?v=-nYNd6EuZHU&feature',
    categoria: 'Front End',

  });

  return (
    <PageDefault>
      <h1>Cadastro de vídeo.</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        // alert('Vídeo cadastrado com sucesso!!!');
        videosRepository.create({
          title: values.title,
          url: values.url,
          categoriaId: 1,
        }).then(() => {
          console.log('Cadastrou com sucesso!');
          history.push('/');
        });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="title"
          value={values.title}
          onChange={handleChange}
          type="text"
        />
        <FormField
          label="URL do Vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
          type="text"
        />

        <FormField
          label="Categoria"
          name="url"
          value={values.categoria}
          onChange={handleChange}
          type="text"
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Catergoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
