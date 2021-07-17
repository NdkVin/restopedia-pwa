import FavoriteResto from '../../data/favoriteresto-idb';
import { homeTemplates } from '../templates/templates';

const Favorite = {
  async render() {
    return `
        <div class="hero">
          <div>
            <picture>
                <source class="hero-img" media="(min-width: 601px)" srcset="./images/hero-large.jpg">
                <source class="hero-img"  media="(max-width: 600px)" srcset="./images/hero-small.jpg">
                <img 
                  class="hero-img" 
                  src='./images/hero-large.jpg' 
                  alt="hero"></img>
            </picture>
          </div>
          <div class="texthero">
            <h1 class="title">Find your best restaurant</h1>
            <p class="para">
              website to find your favorite restaurant around you easily and quickly.
            </p>
          </div>
        </div>
        <div id="content" class="content">
            <div class="isi">
                <div class="home-title">
                    Favorite
                </div>
                <div class="list-post" id="list-post"></div>
            </div>
        </div>
        `;
  },

  async afterRender() {
    const resto = await FavoriteResto.getAllResto();
    const list = document.getElementById('list-post');

    if (resto.length === 0) {
      list.innerHTML = `
        No Favorite Restaurant Yet
      `;
    }
    resto.forEach((restoran) => {
      list.innerHTML += homeTemplates(restoran);
    });
  },
};

export default Favorite;
