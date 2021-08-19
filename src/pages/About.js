import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading: {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Shane Rogers</span>
            </p>
            <h2 className="about__heading">A Fullstack Software Engineer</h2>
            <div className="about__info">
              <PText>
                Full stack web developer leveraging backgrounds in finance and
                project management to provide a forward-thinking approach to how
                end-users interact with websites and software platforms.
                <br />
                <br />
                A driven performer who recently earned a certificate in Full
                Stack Web Development from the University of California Davis
                Coding Boot Camp. Project-focused web developer with experience
                conducting research and collaborating with developers to create
                useful, creative, and efficient web applications.
                <br />
                <br />
                Strengths in efficiency, resourcefulness, and project governance
                from start to finish.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="ayan khan img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="Education"
              items={['Bachelor of Business, University of Hawaii']}
            />
            <AboutInfoItem
              title="Education"
              items={[
                'Full-Stack Coding Certificate, University of California Davis',
              ]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skill</h1>
            <AboutInfoItem
              title="Front End"
              items={['HTML', 'CSS', 'Javascript', 'React']}
            />
            <AboutInfoItem
              title="Backend"
              items={['Node', 'MongoDB', 'MySQL', 'Express']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
