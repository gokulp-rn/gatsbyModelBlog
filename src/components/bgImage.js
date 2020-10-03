import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  z-index: -1000;
  height: 100vh;
  width: 100vw;
  transform: translate3d(${props => props.currentIndex * -100}%, 0, 0);
  white-space: nowrap;
  position: absolute;
  top: 0;
  transition: transform 0.2s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const ImgContainer = styled.div`
  transition: opacity 2s ease-in-out;
  width: 100vw;
  display: inline-block;

  /* Sets the gatby image wrapper to be viewport height */
  & .gatsby-image-wrapper {
    height: 100vh;
  }
`;

const BgImage = ({
  fluid
}) => (
  <Container>
    <ImgContainer>
      <Img fluid={fluid} />
      </ImgContainer>
  </Container>
);
BgImage.propTypes = {
  fluid: PropTypes.object.isRequired
};

export default BgImage;