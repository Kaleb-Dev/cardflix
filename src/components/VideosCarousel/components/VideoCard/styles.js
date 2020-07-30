import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 150px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: .3s;
  &:hover,
  &:focus {
    transform: scale(0.95);
    opacity: .5;
    border: 4px solid;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const PlaylistCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 500px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: .3s;
  &:hover,
  &:focus {
    transform: scale(0.95);
    opacity: .5;
    border: 4px solid;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`
export default PlaylistCardContainer