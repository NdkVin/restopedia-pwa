import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restautant-source';
import { detailTemplates } from '../templates/templates';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteResto from '../../data/favoriteresto-idb';

const Detail = {
  async render() {
    return `
     <div class="detail"></div>
     <div class="likeButton"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = document.querySelector('.detail');
    const hasil = await restaurantSource.detailPage(url.id);
    movie.innerHTML = detailTemplates(hasil);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeButton'),
      favorite: FavoriteResto,
      restoran: {
        id: hasil.id,
        name: hasil.name,
        city: hasil.city,
        rating: hasil.rating,
        description: hasil.description,
        pictureId: hasil.pictureId,
      },
    });
  },
};

export default Detail;
