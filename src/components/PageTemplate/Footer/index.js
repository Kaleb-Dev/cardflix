import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../../assets/img/logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className='img' src={Logo} alt="Logo CardFlix" width={'140px'} />
      </a>
      <p>
        Orgulhosamente criado por <a href="https://youtube.com/c/CardTunic">CardTunic</a> durante a Imersão React da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
