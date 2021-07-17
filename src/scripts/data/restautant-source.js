import API_ENDPOINT from '../globals/api-endpoint';

class restaurantSource {
  static async homePage() {
    const response = await fetch(API_ENDPOINT.home);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailPage(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default restaurantSource;
