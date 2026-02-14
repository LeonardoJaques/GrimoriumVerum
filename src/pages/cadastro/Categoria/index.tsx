import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import type { Categoria } from '../../../types';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const initialValues = {
        title: '',
        description: '',
        color: '#000000',
    };

    const { handleChange, values, clearForm } = useForm(initialValues);

    useEffect(() => {
        categoriasRepository.getAll().then((response) => {
            setCategorias(response);
        });
    }, []);

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria: {values.title}
            </h1>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    setCategorias([
                        ...categorias,
                        { ...values, id: Date.now(), color: values.color },
                    ]);
                    clearForm();
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
                    label="Cor"
                    value={values.color}
                    onChange={handleChange}
                    type="color"
                    name="color"
                />
                <Button type="submit">Cadastrar</Button>
            </form>

            {categorias.length === 0 && <div>Loading...</div>}

            <ul>
                {categorias.map((categoria) => (
                    <li key={categoria.id}>{categoria.title}</li>
                ))}
            </ul>
            <Link to="/">Ir para home</Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
