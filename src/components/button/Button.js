// import PropTypes from 'prop-types';
import { ButtonLoadMore } from 'components/button/Button.styled';
import { Loader } from 'components/loader/Loader';

export const Button = ({ onClick, status }) => {
  return (
    <ButtonLoadMore onClick={onClick} type="button">
      {status === 'pending' && <Loader />}
      Load more
    </ButtonLoadMore>
  );
};
