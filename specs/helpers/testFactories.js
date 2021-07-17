import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteResto from '../../src/scripts/data/favoriteresto-idb';

const testFactories = async (restoran) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#Container'),
    favorite: FavoriteResto,
    restoran,
  });
};

export { testFactories };
