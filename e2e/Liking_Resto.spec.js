const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show emty favorite resto', ({ I }) => {
  I.seeElement('#list-post');
  I.see('No Favorite Restaurant Yet', '#list-post');
});

Scenario('liking one movie',async ({ I }) => {
  I.see('No Favorite Restaurant Yet', '#list-post');

  I.amOnPage('/');
  I.seeElement('.todetail');
  I.click(locate('.todetail').first());
  const restoTite = await I.grabTextFrom('.main h1');

  I.seeElement('.likee');
  I.click('.likee');

  I.amOnPage('/#/favorite');
  I.seeElement('.todetail');

  const favoriteRestoTitle = await I.grabTextFrom('.restoran-name');
  assert.strictEqual(restoTite, favoriteRestoTitle);
});

Scenario('unliking one movie',async ({ I }) => {
  I.see('No Favorite Restaurant Yet', '#list-post');
  const frist = await I.grabTextFrom('#list-post');

  I.amOnPage('/');
  I.seeElement('.todetail');
  I.click(locate('.todetail').first());
  const restoTite = await I.grabTextFrom('.main h1');
  
  I.seeElement('.likee');
  I.click('.likee');
  
  I.amOnPage('/#/favorite');
  I.seeElement('.todetail');
  
  const favoriteRestoTitle = await I.grabTextFrom('.restoran-name');
  assert.strictEqual(restoTite, favoriteRestoTitle);

  I.seeElement('.todetail');
  I.click('.todetail');

  I.seeElement('.unlikee');
  I.click('.unlikee');

  I.amOnPage('/#/favorite');
  const emty = await I.grabTextFrom('#list-post');

  assert.strictEqual(frist, emty);
  });