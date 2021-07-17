import FavoriteResto from '../src/scripts/data/favoriteresto-idb';
import * as helper from './helpers/testFactories';

describe('Unike A Restorant', () => {
  const likeButtonContainer = () => {
    document.body.innerHTML = '<div id="Container"></div>';
  };

  beforeEach(() => {
    likeButtonContainer();
    FavoriteResto.putResto({ id: 1 });
  });

  afterEach(() => {
    FavoriteResto.deleteResto(1);
  });

  it('should display unlike widget when the movie has been liked', async () => {
    await helper.testFactories({ id: 1 });

    expect(document.querySelector('.unlikee'))
      .toBeTruthy();
  });

  it('should not display unlike widget when the movie has been liked', async () => {
    await helper.testFactories({ id: 1 });

    expect(document.querySelector('.likee'))
      .toBeFalsy();
  });

  it('should be able to unliking', async () => {
    await helper.testFactories({ id: 1 });

    document.querySelector('.unlikee')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllResto())
      .toEqual([]);
  });

  it('should not throw error if the unliked movie is not in the list', async () => {
    await helper.testFactories({ id: 1 });

    FavoriteResto.deleteResto(1);
    document.querySelector('.unlikee')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllResto())
      .toEqual([]);
  });
});
