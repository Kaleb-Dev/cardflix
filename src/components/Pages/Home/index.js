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
          videoDescription={"O Mistério mais mistérioso do Minecraft! O experimento do QUARTO BRANCO, também conchecido como a sala da loucura..."}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[4]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[5]}
        /> 
    </div>
  );
}

export default Home