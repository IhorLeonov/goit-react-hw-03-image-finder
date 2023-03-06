import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from 'components/modal/Modal';
import {
  ImageGalleryListItem,
  ImageGalleryItemImage,
} from 'components/imageGalleryItem/ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

  render() {
    const { showModal } = this.state;
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <ImageGalleryListItem>
        <ImageGalleryItemImage
          onClick={this.toggleModal}
          src={webformatURL}
          alt={tags}
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </ImageGalleryListItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
