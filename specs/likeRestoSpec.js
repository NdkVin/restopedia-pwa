import FavoriteResto from '../src/scripts/data/favoriteresto-idb';
import * as helper from './helpers/testFactories';

describe('Liking A Restorant', () => {
  const likeButtonContainer = () => {
    document.body.innerHTML = '<div id="Container"></div>';
  };

  beforeEach(() => {
    likeButtonContainer();
  });

  it('should bring up a like button when you do not like the restaurant', async () => {
    await helper.testFactories({ id: 1 });

    expect(document.querySelector('.likee'))
      .toBeTruthy();
  });

  it('should not bring up a like button when you do not like the restaurant', async () => {
    await helper.testFactories({ id: 1 });

    expect(document.querySelector('.unlikee'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await helper.testFactories({ id: 1 });

    document.querySelector('#likeButton')
      .dispatchEvent(new Event('click'));
    const resto = await FavoriteResto.getResto(1);

    expect(resto)
      .toEqual({ id: 1 });

    FavoriteResto.deleteResto(1);
  });

  it('should not be able to like the restaurant when restorant alredy liked', async () => {
    await helper.testFactories({ id: 1 });

    FavoriteResto.putResto({ id: 1 });
    document.querySelector('.likee')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllResto())
      .toEqual([{ id: 1 }]);

    FavoriteResto.deleteResto(1);
  });

  it('should not be able to like the restaurant whenit not has id', async () => {
    await helper.testFactories({});
    document.querySelector('.likee')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllResto())
      .toEqual([]);

    FavoriteResto.deleteResto(1);
  });
});
