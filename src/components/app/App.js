import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { GlobalStyle } from 'components/constants/GlobalStyle';
import { Layout } from 'components/layout/Layout';
import { Searchbar } from 'components/searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { Button } from 'components/button/Button';
import { ImageFinder } from 'components/app/App.styled';

export class App extends Component {
  state = {};

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  handleSubmit() {}

  render() {
    return (
      <Layout>
        <ImageFinder>
          <Searchbar onSubmit={this.handleSubmit}></Searchbar>
          <ImageGallery>
            <ImageGalleryItem></ImageGalleryItem>
          </ImageGallery>
          <Button></Button>
        </ImageFinder>
        <GlobalStyle />
      </Layout>
    );
  }
}
