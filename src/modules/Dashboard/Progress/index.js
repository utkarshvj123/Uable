import React, { Component } from 'react'
import ProgressBar from '../../../component/ProgressBar';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container=styled.div`
`;

export default class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
          percentage: this.props.percentage
        };
      }
  
      render() {
        return (
          <Container>
              <ProgressBar
                strokeWidth="10"
                sqSize="200"
                percentage={this.state.percentage}
                />
            </Container>
        );
      }
}
Progress.defaultProps = {
  percentage: 0,
  strokeWidth:"10"
};
Progress.propTypes = {
  percentage: PropTypes.number,
  strokeWidth:PropTypes.string
};

