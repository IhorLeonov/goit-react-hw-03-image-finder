import { LoaderBox } from 'components/loader/Loader.styled';
import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = ({ page }) => {
  return (
    <LoaderBox page={page}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width={96}
        visible={true}
      />
    </LoaderBox>
  );
};

Loader.propTypes = {
  page: PropTypes.number.isRequired,
};
