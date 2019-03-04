const Data = {
  TITLE: [
    `Renaissance Man`,
    `Man on the Moon`,
    `12 Years a Slave`,
    `Gran Torino`,
    `Bienvenue chez les Ch'tis`,
    `La Vita e Bella`,
    `Everything Is Illuminated`,
    `WALL·E`,
    `How I Met Your Mother`,
    `Le Fabuleux destin d'Amélie Poulain`,
    `The Pursuit of Happyness`,
    `Coach Carter`,
    `The Hateful Eight`,
    `The Addams Family`,
    `The Grand Seduction`,
    `Awakenings`,
    `Robin Hood`,
  ],
  GENRE: [
    `Action`,
    `Adventure`,
    `Comedy`,
    `Crime`,
    `Drama`,
    `Fantasy`,
    `Historical`,
    `Horror`,
    `Thriller`,
  ],
  POSTER_FILE: [
    `accused.jpg`,
    `blackmail.jpg`,
    `blue-blazes.jpg`,
    `fuga-da-new-york.jpg`,
    `moonrise.jpg`,
    `three-friends.jpg`,
  ],
  DESCRIPTION: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`,
  ]
};

/** Генерирует случайное целое число в заданных пределах
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

/** Генерирует случайное число сплавающей точкой в заданных пределах
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const getRandomFloat = (min, max) => Math.random() * (max - min) + min;

/** Возвращает случайный элемент из массива
 * @param {array} array
 * @return {arrayElement}
 */
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

/** Создает массив со случайным кол-вом элементов
 * @param {array} array
 * @return {array}
*/
const getRandomArray = (array) => {
  const randomLength = getRandomInteger(1, 3);
  const newArray = [];
  const copyArray = array.slice();

  for (let i = 0; i < randomLength; i++) {
    const randomElementIndex = getRandomInteger(0, copyArray.length - 1);
    const randomElement = copyArray.splice(randomElementIndex, 1)[0];
    newArray.push(randomElement);
  }

  return newArray;
};

export default () => ({
  title: getRandomElement(Data.TITLE),
  rating: getRandomFloat(0, 10).toFixed(1),
  year: getRandomInteger(1900, 2018),
  duration: `${getRandomInteger(1, 3)}h ${getRandomInteger(0, 59)}m`,
  genre: getRandomElement(Data.GENRE),
  posterFile: getRandomElement(Data.POSTER_FILE),
  commentsAmount: getRandomInteger(0, 500),
  description: getRandomArray(Data.DESCRIPTION).join(` `),
  isWatchlistAdded: getRandomInteger(0, 1),
  isWatched: getRandomInteger(0, 1),
  isFavourite: getRandomInteger(0, 1),
});
