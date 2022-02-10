import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, Button, ButtonLink, ButtonText, Arrow } from './HeroStyles';

const Hero = () => (
  <Section style={{ paddingTop: "2rem" }} hero row nopadding>
    <LeftSection>
      <SectionText hero minor>
        Hey there,
      </SectionText>
      <SectionTitle hero main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText hero>
        Glad to have you on my portfolio, I am excited about all the things we are going to build together. Feel free to have a look around at some of the things I have been working on, and also get in touch so we can get started on your project right away!
      </SectionText>
      <Button>
        <ButtonLink href="#projects">
          <ButtonText>My Projects</ButtonText> 
        </ButtonLink>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;