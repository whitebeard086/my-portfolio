import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";

const About = () => (
  <Section id="about">
    <SectionDivider style={{ marginBottom: "3rem" }} />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      Hello, my name is Alex and I love designing and building things for the web. My interest in
      web development started in 2014 when I stumbled on a video tutorial on YouTube about how to
      make simple HTML and CSS landing pages, and there was no looking back for me.
      <br />
      <br /> Till date, I have had the opportunity to design and build various custom websites with
      technologies like ReactJS and NodeJS. I have also designed and maintained Wordpress sites.
    </SectionText>
  </Section>
);

export default About;
