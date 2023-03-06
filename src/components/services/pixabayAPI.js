import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export const getRequest = async (quary, page) => {
  const params = {
    q: quary,
    page: page,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    key: '32998270-2baa29d20b34632b2d37a1874',
  };
  const response = await axios.get('api/', { params });
  return response.data;
};

// export function fetchImages(quary) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '32998270-2baa29d20b34632b2d37a1874';

//   return fetch(
//     `${BASE_URL}?q=${quary}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }

//     return Promise.reject(
//       new Error(`Nothing found for your request "${quary}".`)
//     );
//   });
// }
