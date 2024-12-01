import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components";
import Navigation from "../components/Navigation"
import Heading from "../components/Heading"
import Content from "../components/Content"
import Image from "../components/Image"
import ShreyashaPdl from "../images/shrey_pdl.jpeg"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const paragraphStyles = {
  marginBottom: 24,
}


const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Intro = styled.div`
  margin-left: 2rem;
`;

const SImage = styled(Image)`
  filter: drop-shadow(5px 5px 10px lightgray);
`;

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <main style={pageStyles}>
      <Navigation location={location} />
      <Heading>
        Shreyasha Paudel
      </Heading>
      <MainContent>
        <SImage source={ShreyashaPdl} title="" medium="" />
        <Intro>
          <h3>About Me</h3>
          <p style={paragraphStyles}>
          Hi, I am a Ph.D. student at the University of Toronto in the Department of Computer Science. 
          I am part of the Toronto Climate Observatory where I do interdisciplinary place-based research 
          on climate and disaster data under the supervision of Professor Robert Soden. My research 
          interests lie at the intersection of Human Computer Interaction, Critical Data Studies, and 
          Feminist and Decolonial STS and I use historicist methods, ethnography, and participatory 
          design methods to pursue them. 
          </p>
          <p style={paragraphStyles}>
          My dissertation research examines the role of computing and digital technology as sites of 
          political contestation that determine our understanding of climate change and possible responses 
          to its impacts. This work is motivated by the well-documents disparities in the impacts of 
          climate change and how digital technology is both being used to exacerbate these disparities 
          as well as create alternatives that resist them. In particular, I examine the information 
          practices of grassroots activists and civic-tech organizations in Nepal as they attempt 
          to create local climate and disaster data infrastructures to address local needs, incorporate 
          local knowledge, and increase community participation. I want to understand the role of 
          broader historical, social, and technological constraints in shaping the practices and 
          impacts of these activists and organizations, and using these insights to design socio-technical
           interventions that can better support them to intervene in their stated goals of climate and 
           disaster equity.
          </p>
        </Intro>
      </MainContent>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
