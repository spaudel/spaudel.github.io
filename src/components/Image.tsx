import * as React from "react";
import styled from "styled-components";

const SImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const SContainer = styled.div`
  margin: 0 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  min-width: 25rem;
`;

const SDescription = styled.div`
  margin: 1rem 0;
`;


const Image = ({ source, title, medium, ...props }) => {
  return (
    <SContainer {...props}>
      <SImage src={source} />
      <SDescription>
        <p>{title}</p>
        <p>{medium}</p>
      </SDescription>
    </SContainer>
  )
}

export default Image;

