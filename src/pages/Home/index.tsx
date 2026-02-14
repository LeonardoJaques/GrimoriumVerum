import { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import type { Categoria } from '../../types';

function Home() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        categoriasRepository
            .getAllWithVideos()
            .then((categoriasComVideos) => {
                setCategorias(categoriasComVideos);
            })
            .catch((err: Error) => {
                console.error(err.message);
            });
    }, []);

    return (
        <PageDefault paddingAll={0}>
            {categorias.length === 0 && <div>Loading...</div>}
            {categorias.map((categoria, indice) => {
                if (indice === 0) {
                    return (
                        <div key={categoria.id}>
                            <BannerMain
                                videoTitle={categorias[0].videos?.[0]?.title || ''}
                                url={categorias[0].videos?.[0]?.url || ''}
                                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
                            />
                            <Carousel ignoreFirstVideo category={categorias[0]} />
                        </div>
                    );
                }
                return <Carousel key={categoria.id} category={categoria} />;
            })}
        </PageDefault>
    );
}

export default Home;
