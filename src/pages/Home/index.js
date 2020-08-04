import React, { useEffect, useState } from 'react';
// import Menu from '../../components/Menu'
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [initialData, setData] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setData(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // http://localhost:3001/categorias?_embed=videos

  return (
    <PageDefault>
      {/* {JSON.stringify(initialData)} */}

      {initialData.length === 0 && (<div>Loading...</div>)}
      {initialData.length > 1 && (
        <>
          {' '}
          <BannerMain
            videoTitle={initialData[0].videos[0].title}
            url={initialData[0].videos[0].url}
            videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
          />

          <Carousel ignoreFirstVideo category={initialData[0]} />
          <Carousel category={initialData[1]} />
          
        </>
      )}

    </PageDefault>
  );
}
export default Home;
