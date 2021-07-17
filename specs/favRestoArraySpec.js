import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favorites = [];

const favoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favorites.find((resto) => resto.id === id);
  },

  getAllResto() {
    return favorites;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(resto.id)) {
      return;
    }

    favorites.push(resto);
  },

  deleteResto(id) {
    favorites = favorites.filter((resto) => resto.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favorites = []));

  itActsAsFavoriteRestoModel(favoriteRestoArray);
});
