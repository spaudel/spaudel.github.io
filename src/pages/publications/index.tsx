import * as React from "react"
import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Navigation from "../../components/Navigation"
import Heading from "../../components/Heading"
import Content from "../../components/Content"
import CSCW_Aftermath from "../../../static/CSCW_Aftermath__Infrastructure__Resources__and_Organizational_Adaptation_in_the_Wake_of_Disaster_Final.pdf"
import LIMIT23 from "../../../static/LIMITS23_Towards_the_Development_of_an_Anti-Colonial_Critique_of_Climate_and_Disaster_Risk_Models_Final.pdf"
import ReImaginingOpenData from "../../../static/Reimagining_Open_Data.pdf"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const PublicationsPage: React.FC<PageProps> = ({data, location}) => {
  return (
    <main style={pageStyles}>
      <Navigation location={location} />
      <Heading>Shreyasha Paudel</Heading>
      <Content>
        <h3>Publications</h3>
        <ol>
          <li>
            <strong>Shreyasha Paudel</strong>, Wendy Norris, and Robert Soden. 2024. Aftermath: Infrastructure, Resources, and Organizational Adaptation in the Wake of Disaster. Proc. ACM Hum.-Comput. Interact. 8, CSCW1, Article 17 (April 2024), 24 pages. 
            <a href="https://doi.org/10.1145/3637294">https://doi.org/10.1145/3637294</a>
            <p>
              <a href={CSCW_Aftermath}>Download PDF 📥</a>
            </p>
          </li>
          <li>
            <strong>Shreyasha Paudel</strong>, Sabine Loos, and Robert Soden. 2023. Towards the Development of an Anti-Colonial Critique of Climate and Disaster Risk Models. Ninth Computing within Limits 2023. LIMITS. 
            <a href="https://doi.org/10.21428/bf6fb269.6b027e1a">https://doi.org/10.21428/bf6fb269.6b027e1a</a>
            <p>
              <a href={LIMIT23}>Download PDF 📥</a>
            </p>
          </li>
          <li>
            <strong>Shreyasha Paudel</strong> and Robert Soden. 2023. Reimagining Open Data during Disaster Response: Applying a Feminist Lens to Three Open Data Projects in Post-Earthquake Nepal. Proc. ACM Hum.-Comput. Interact. 7, CSCW1, Article 86 (April 2023), 25 pages. 
            <a href="https://doi.org/10.1145/3579519">https://doi.org/10.1145/3579519</a>
            <p>
              <a href={ReImaginingOpenData}>Download PDF 📥</a>
            </p>
          </li>
        </ol>
      </Content>
    </main>
  )
}

export default PublicationsPage;

export const Head: HeadFC = () => <title>Artwork Page</title>;
