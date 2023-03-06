import { PropTypes } from 'prop-types';
import { ImageGalleryList } from 'components/imageGallery/ImageGallery.styled';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

export class ImageGallery extends Component {
  state = {};

  render() {
    const { data, quary, status } = this.props;

    if (status === 'idle') {
      return <p>Let's start!</p>;
    }

    if (status === 'empty') {
      return <p>{`Nothing found for your request "${quary}".`}</p>;
    }

    if (status === 'rejected') {
      return <p>Oops, something is wrong! =( Reload page and try more.</p>;
    }

    if (status === 'resolved') {
      return (
        <ImageGalleryList>
          {data.map(({ id, ...otherProps }) => (
            <ImageGalleryItem key={id} {...otherProps} />
          ))}
        </ImageGalleryList>
      );
    }
  }
}

ImageGallery.propTypes = {
  quary: PropTypes.string,
  status: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
