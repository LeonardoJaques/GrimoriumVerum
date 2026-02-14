import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import type { Categoria } from '../../../types';

function CadastroVideo() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const categoryTitles = categorias.map(({ title }) => title);
    const { handleChange, values } = useForm({
        title: '',
        url: '',
        categoria: '',
    });

    useEffect(() => {
        categoriasRepository.getAll().then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
        });
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de vídeo</h1>

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const categoriaEscolhida = categorias.find(
                        (categoria) => categoria.title === values.categoria,
                    );
                    if (!categoriaEscolhida) return;

                    videosRepository
                        .create({
                            title: values.title,
                            url: values.url,
                            categoriaId: categoriaEscolhida.id,
                        })
                        .then(() => {
                            navigate('/');
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
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />
                <Button type="submit">Cadastrar</Button>
            </form>

            <br />
            <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
        </PageDefault>
    );
}

export default CadastroVideo;
