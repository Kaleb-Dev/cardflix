import React from 'react';
import styled from 'styled-components'
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem , SliderPlaylist} from './components/Slider'

function VideosCarousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = "#black";
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          if (categoryTitle === "Séries") {
            return (
                <SliderItem key={video.titulo, index}>
                  <VideoCard
                    videoTitle={video.titulo}
                    videoURL={video.url}
                    categoryColor="#black"
                  />
                </SliderItem>
            );
          }
          else {
            return (
              <SliderItem key={video.titulo, index}>
                <VideoCard
                  videoTitle={video.titulo}
                  videoURL={video.url}
                  categoryColor="#black"
                />
              </SliderItem>
            );
          }
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default VideosCarousel;
