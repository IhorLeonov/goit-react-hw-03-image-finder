import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { GlobalStyle } from 'components/constants/GlobalStyle';
import { Layout } from 'components/layout/Layout';
import { Searchbar } from 'components/searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Button } from 'components/button/Button';
import { ImageFinder } from 'components/app/App.styled';
import { Loader } from 'components/loader/Loader';
import * as API from 'components/services/pixabayAPI';

export class App extends Component {
  state = {
    data: [],
    quary: '',
    status: 'idle',
    error: null,
    page: 1,
    totalHits: 0,
  };
  fetchImages = async (newQuary, newPage) => {
    try {
      const { quary } = this.state;

      if (quary !== newQuary) {
        this.setState({
          quary: newQuary,
          page: newPage,
          data: [],
          status: 'pending',
        });
      }
      // this.setState({ status: 'pending' });
      const newData = await API.getRequest(newQuary, newPage);

      if (!newData.totalHits) {
        return this.setState({ status: 'empty' });
      }

      this.setState(prevState => ({
        page: prevState.page + 1,
        data: [...prevState.data, ...newData.hits],
        totalHits: newData.totalHits,
        status: 'resolved',
      }));
    } catch (error) {
      console.log(error.message);
      this.setState({ error, status: 'rejected' });
    }
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  render() {
    const { data, status, quary, error, totalHits, page } = this.state;

    return (
      <Layout>
        <ImageFinder>
          <Searchbar
            onChange={this.handleInputChange}
            onSubmitForm={this.fetchImages}
            resetPage={page}
          ></Searchbar>
          <ImageGallery
            data={data}
            status={status}
            quary={quary}
            error={error}
          />
          {status === 'pending' && <Loader />}
          {data.length > 0 && totalHits > data.length && (
            <Button onClick={() => this.fetchImages(quary, page)} />
          )}
        </ImageFinder>
        <GlobalStyle />
        <ToastContainer />
      </Layout>
    );
  }
}
// {status === 'pending' && <Loader />}
