import React from 'react';
import HeroImg from '../assets/images/hero.png';
import PText from './PText';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, This is</span>
          <span>Shane Rogers</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <PText>
            I am working as a freelance web designer and developer for 4 years.
            I love to design and make new web experiences for the people.
          </PText>
          <Button btnLink="/projects" btnText="see my works" />
        </div>
        <div className="hero__social">
          <div className="hero__social__indicator">
            <p>Follow</p>
            <img src={SocialMediaArrow} alt="social media arrow" />
          </div>
          <div className="hero_social_text">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/shanerogers916/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Rinzler8806"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero__scrollDown">
          <p>Scroll</p>
          <img src={ScrollDownArrow} alt="" />
        </div>
      </div>
    </div>
  );
}
