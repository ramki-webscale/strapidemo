/**
 *
 * StyledImg
 *
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import sizes from '../../assets/styles/sizes';

const StyledImg = styled.img`
  // General style
  width: 100%;
  height: 100%;
  object-fit: cover;

  // Article size
  ${props =>
    props.type === 'article' &&
    css`
      //height: ${sizes.article.img.height};   
    `}}
`;

StyledImg.defaultProps = {
  type: 'article'
};

StyledImg.propTypes = {
  type: PropTypes.oneOf(['article', 'slide', 'avatar'])
};

export default StyledImg;
