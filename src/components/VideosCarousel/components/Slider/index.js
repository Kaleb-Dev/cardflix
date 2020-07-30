import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    transform: initial;
    &:before {
      font-size: 45px;
    }
  }
  
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 0px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 150px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      infinite: false,
      speed: 500,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      pauseOnDotsHover: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 