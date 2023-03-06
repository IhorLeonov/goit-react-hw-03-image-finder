import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GrFormSearch } from 'react-icons/gr';
import { iconSize } from 'components/constants/IconSize';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from 'components/searchbar/Searchbar.styled';

export const Searchbar = ({ onSubmitForm, resetPage }) => {
  return (
    <SearchbarHeader>
      <Formik
        initialValues={{ searchQuary: '' }}
        onSubmit={(values, actions) => {
          const { searchQuary } = values;
          resetPage = 1;

          if (searchQuary.trim() === '') {
            toast.error('Enter search query!', {
              position: 'top-left',
              autoClose: 2000,
            });
            return;
          }

          onSubmitForm(searchQuary, resetPage);
          // actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        <SearchForm>
          <SearchFormButton type="submit">
            <GrFormSearch size={iconSize.m}></GrFormSearch>
            <SearchFormButtonLabel></SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            name="searchQuary"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  resetPage: PropTypes.number.isRequired,
};
