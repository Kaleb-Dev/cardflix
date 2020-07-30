import React from 'react';
import Menu_header from '../../PageTemplate/Menu'
import dadosIniciais from '../../../data/dados_iniciais.json'
import BannerMain from '../../BannerMain'
import Carousel from '../../VideosCarousel'
import Footer from '../../PageTemplate/Footer'

function Home() {
  return (
    <div style={{background: '#141414'}}>
        <Menu_header></Menu_header>
        <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Sejam bem-vindos, à RedstoneLand episódio 02!!! Nesse vídeo eu tento explorar o *NOVO NETHER* da 1.16, a versão mais recente do MINECRAFT, mas ocorre alguns imprevistos... Se vc gostou do vídeo deixa o like pra ganhar uma redstone de presente 😉"}
        />

        <Carousel
          category={dadosIniciais.categorias[0]}
        /> 
                <Carousel
          category={dadosIniciais.categorias[1]}
        /> 
                <Carousel
          category={dadosIniciais.categorias[2]}
        /> 
                <Carousel
          category={dadosIniciais.categorias[3]}
        /> 
                <Carousel
          category={dadosIniciais.categorias[4]}
        /> 
                <Carousel
          category={dadosIniciais.categorias[5]}
        /> 
    </div>
  );
}

export default Home