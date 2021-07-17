import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteResto from '../src/scripts/data/favoriteresto-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    const data = await FavoriteResto.getAllResto();
    data.forEach(async (movie) => {
      await FavoriteResto.deleteResto(movie.id);
    });
  });
  itActsAsFavoriteRestoModel(FavoriteResto);
});
