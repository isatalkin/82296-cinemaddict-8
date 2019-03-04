import makeFilter from './make-filter';
import makeCard from './make-card';
import getData from './data';

/**
 * Перечисление используемых констант.
 * @readonly
 * @enum {number}
 */
const Numbers = {
  DEFAULT_CARDS: 7,
  DEFAULT_EXTRA_CARDS: 2,
  MAX_CARDS: 10
};

/** Генерирует случайное число от 0 до заданного максимума
 * @param {number} max - максимальное число
 * @return {number} - возвращает число
 */
const getRandomNumber = (max) => Math.floor(Math.random() * max);

const cardContainers = document.querySelectorAll(`.films-list__container`);

/** Удаляет все карточки из всех контейнеров */
const clearCardContainers = () => {
  cardContainers.forEach((item) => {
    item.innerHTML = ``;
  });
};

/** Рендерит карточки в заданный контейнер
 * @param {number} containerIndex - индекс контейнера в коллекции контейнеров
 * @param {number} quantity - кол-во карточек для рендера
 * @param {boolean} hasControls - наличие контролов у карточек
 */
const renderCards = (containerIndex, quantity, hasControls = true) => {
  cardContainers[containerIndex].innerHTML = ``;
  const cards = [];
  for (let i = 0; i < quantity; i++) {
    const data = getData();
    data.hasControls = hasControls;
    cards.push(data);
    cardContainers[containerIndex].insertAdjacentHTML(`beforeend`, makeCard(data));
  }
};

const filterContainer = document.querySelector(`.main-navigation`);

filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`All movies`, 0, true));
filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`Watchlist`, 13));
filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`History`, 4));
filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`Favorites`, 8));
filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`Stats`, 0, false, true));

filterContainer.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-navigation__item`)) {
    clearCardContainers();
    renderCards(0, getRandomNumber(Numbers.MAX_CARDS));
    renderCards(1, getRandomNumber(Numbers.MAX_CARDS), true);
    renderCards(2, getRandomNumber(Numbers.MAX_CARDS), true);
  }
});

renderCards(0, Numbers.DEFAULT_CARDS);
renderCards(1, Numbers.DEFAULT_EXTRA_CARDS, true);
renderCards(2, Numbers.DEFAULT_EXTRA_CARDS, true);
