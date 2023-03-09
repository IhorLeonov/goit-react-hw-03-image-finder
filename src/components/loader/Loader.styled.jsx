import styled from 'styled-components';
import PropTypes from 'prop-types';

export const LoaderBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${props =>
    props.page === 1 &&
    `position: absolute;
      top:50%;
        left:50%;
          transform:translate(-50%, -50%);`};
`;

LoaderBox.propTypes = {
  page: PropTypes.number.isRequired,
};
