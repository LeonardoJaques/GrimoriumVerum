import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias?_embed=videos
`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIES)
    .then(async (serverResponse) => {
      const response = await serverResponse.json();
      return response;
    });
}

export default {
  getAllWithVideos,
};
