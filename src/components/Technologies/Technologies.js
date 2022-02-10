import React from "react";
import { TechnologyData } from "../../constants/constants";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListIcon, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
  <Section main id="tech">
    <SectionDivider style={{ marginBottom: "3rem" }} />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have had the opportunity to work with several technologies throughout my journey as a Web
      Developer. From Design, to Front-End, and Back-End.
    </SectionText>
    <List>
      {TechnologyData.map(({ title, technologies, icon, paragraphIcon, id }) => (
        <ListItem key={id}>
          <ListIcon>
          {icon}
          </ListIcon>
          <ListContainer>
            <ListTitle>{title}</ListTitle>
            {technologies.map((technology, i) => (
              <ListParagraph key={`${i} +${technology}`}>{paragraphIcon} {technology}</ListParagraph>
            ))}
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Technologies;
