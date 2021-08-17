import React from 'react';
import { MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServiceItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServiceItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what I will do for you" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="Lorem ipsum hrhsdrhdshfdshsfdsfsf fgd sdg dsg sdf g"
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="Lorem ipsum hrhsdrhdshfdshsfdsfsf fgd sdg dsg sdf g"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Website Design"
            desc="Lorem ipsum hrhsdrhdshfdshsfdsfsf fgd sdg dsg sdf g"
          />
        </div>
      </div>
    </ServiceItemStyles>
  );
}
