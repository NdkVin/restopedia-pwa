import CONFIG from '../../globals/config';

const homeTemplates = (restoran) => `
<div class="post">
    <a href="#/detail/${restoran.id}" class="todetail">
        <div>
            <img class="lazyload post-img" data-src="${CONFIG.BASE_IMAGE_URL.small + restoran.pictureId}" alt="${restoran.name}">
            <div class="post-text">
                <h2 class="restoran-name">${restoran.name}</h2>
                <div class="sub">
                    <p class="city">${restoran.city}  </p>
                    <p class="rating">&#9733 ${restoran.rating}</p>
                </div>
                <p>${restoran.description.slice(0, 200)}...</p>
            </div>
        </div>
    </a>
</div>
`;

const detailTemplates = (restoran) => `
    <div class="detail-page">
        <div class="top">
            <div class="main">
                <h1>${restoran.name}</h1>
                <img class="lazyload gambar-detail" data-src="${CONFIG.BASE_IMAGE_URL.medium + restoran.pictureId}" alt="${restoran.name}">
            </div>
            <div class="side">
                <div class="information">
                    <h2>Restoran Name</h2>
                    <p>${restoran.name}</p>
                    <h2>City</h2>
                    <p>${restoran.city}</p>
                    <h2>Address</h2>
                    <p>${restoran.address}</p>
                    <h2>Categories</h2>
                        <ul class="categories-list">
                            ${restoran.categories.map((categorie) => `<li>${categorie.name}</li>`).join('')}
                        </ul>
                    <div class="food">
                        <h2>Food</h2>
                        <ul class="food-list">
                            ${restoran.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="drink">
                        <h2>Food</h2>
                        <ul class="drink-list">
                            ${restoran.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="bottom">
            <div class="description">
                <h2 >Description</h2>
                <p>${restoran.description}</p>
            </div>
            <h2 class="review-title">Review</h2>
            <div class="customer-review">
                <div class="review">
                ${restoran.customerReviews.map((review) => `
                    <div class="review">
                        <p>${review.name}</p>
                        <p class="review-date-post">${review.date}</p>
                        <p class="review-content">${review.review}</p>
                    </div>
                `).join('')}
                </div>
            </div>
        </div>
    </div>
`;

const createLikeButton = () => `
    <button aria-label="like this resto" id="likeButton" class="like likee">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;
const createLikedButton = () => `
    <button aria-label="unlike this resto" id="likeButton" class="like unlikee">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>  
`;

export {
  homeTemplates,
  detailTemplates,
  createLikeButton,
  createLikedButton,
};
