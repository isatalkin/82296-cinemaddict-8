/** Создаёт шаблон фильтра
 * @param {string} filterName - имя фильтра
 * @param {number} filterCount - кол-во фильтрующихся карточек
 * @param {boolean} isActive - является ли фильтр активным
 * @param {boolean} isAdditional - является ли фильтр дополнительным
 * @return {string} - возвращает строку с шаблоном фильтра
 */
export default (filterName, filterCount = 0, isActive = false, isAdditional) => {
  return `
    <a href="#${filterName === `All movies` ? `all` : filterName.toLowerCase()}" class="
    main-navigation__item
    ${isActive ? `main-navigation__item--active` : ``}
    ${isAdditional ? `main-navigation__item--additional` : ``}
    ">
      ${filterName}
      ${filterCount > 0 ? `<span class="main-navigation__item-count">${filterCount}</span>` : ``}
    </a>`;
};
