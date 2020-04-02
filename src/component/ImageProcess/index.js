import React from "react";
import PropTypes from "prop-types";
import book from "../../assets/Images/book.png";
import styled from "styled-components";
import '../ImageProcess/index.css';


const Img = styled.img`
width:100%;
  height: 200px;
  border-radius: 15px;
  padding: 10px;
  /* border-top-right-radius:15px; */
`;

const Container = styled.div`
  width: 100%;
  
`;

const ImageWrapper=styled.div`
width:${props=>props.width ? props.width : "auto"};

`;

export default function ImageProcess(props) {
  const { images } = props;

  
  return (
    <React.Fragment>
      {images.length === 1 ? (
        <Img src={images[0]} />
      ) : images.length === 2 ? (
        images.map(image => (
          <Container>
            <Img src={image} />
          </Container>
        ))
      ) : images.length === 3 ? (
        <React.Fragment>
          <Container className="row list" >
              <Img src={images[0]} />
          </Container>
          <Container className="d-flex flex-row">
            <ImageWrapper className="" width="50%">
              <Img src={images[1]}/>
            </ImageWrapper>
            <ImageWrapper className="" width="50%">
              <Img src={images[2]} />
            </ImageWrapper>
          </Container>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

ImageProcess.defaultProps = {
  images: [book]
};
ImageProcess.propTypes = {
  images: PropTypes.array
};
