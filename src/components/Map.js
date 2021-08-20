import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Sacramento, California</PText>
          <a
            href="https://www.google.com/maps/d/viewer?gl=us&ie=UTF8&oe=UTF8&msa=0&mid=1MmGLlL1xeOC44D52F1e7WGpUjjU&ll=38.57552600445299%2C-121.48737654904482&z=16"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
