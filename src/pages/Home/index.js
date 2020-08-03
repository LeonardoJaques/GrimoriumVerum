import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carrousel';
import Footer from '../../components/Footer';

function Home() {
  useEffect(() => {
    // categoriasRepository.getAllWithVideos();

    // const URL_BACK = window.location.href.includes('localhost')
    //   ? 'http://localhost:3001/categorias'
    //   : 'https://grimoriumverum.herokuapp.com/categorias';
    // fetch(URL_BACK)
    //   .then(async (serverResponse) => {
    // const response = await serverResponse.json();
    // setCategoria([
    //   ...response,
    // ]);
    // });
  }, []);
  // http://localhost:3001/categorias?_embed=videos

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      <Footer />
    </div>
  );
}
export default Home;
