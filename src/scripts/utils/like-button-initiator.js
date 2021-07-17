import { createLikeButton, createLikedButton } from '../views/templates/templates';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favorite, restoran }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteResto = favorite;
    this._restoran = restoran;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restoran;

    if (await this._isRestoranExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoranExist(id) {
    const restoran = await this._favoriteResto.getResto(id);
    return !!restoran;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._restoran);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._restoran.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
