import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section main id="projects">
    <SectionDivider style={{ marginBottom: "3rem" }} />
    <SectionTitle >Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, sourceIcon, visit, visitIcon }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title="true">{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks code href={source} target="_blank" rel="noopener noreferrer">{sourceIcon}</ExternalLinks>
            <ExternalLinks href={visit} target="_blank" rel="noopener noreferrer">{visitIcon}</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;