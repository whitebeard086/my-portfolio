import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ContactButton, ContactItem } from './ContactStyles';

const Contact = () => (
  <Section id="contact">
    <SectionDivider style={{ marginBottom: "3rem" }} />
    <SectionTitle>Get In Touch</SectionTitle>
    <SectionText>
      I would love to hear all about your project or answer any questions
      you may have, so go ahead and get in touch with me so we can talk
      all about it.
    </SectionText>
    <ContactButton>
      <ContactItem href="mailto:whitebeard086@gmail.com">Say Hello</ContactItem>
    </ContactButton>
  </Section>
);

export default Contact;
