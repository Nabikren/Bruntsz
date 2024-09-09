
import { searchData } from "../../data/serachData";

const searchElement = document.querySelector('#search');
const searchResults = document.querySelector('.search-results');

function searchLinks(str) {
  if (searchElement !== null) {
    const list = document.createElement('ul');

    const filteredHammers = searchData.filter(hammer => {
      return normalizeString(hammer.name).includes(normalizeString(str)) || normalizeString(hammer.propertyValue).includes(normalizeString(str));
    });

    if (filteredHammers.length > 0) {
      filteredHammers.forEach(hammer => {
        const item = document.createElement('li');
        const anchor = document.createElement('a');
        list.classList.add('list-style-none');
        anchor.classList.add('base-text-form');
        anchor.classList.add('link');
        anchor.href = hammer.link;
        anchor.textContent = hammer.link + ' ' + hammer.propertyValue + hammer.propertyUnit;
        item.appendChild(anchor);
        list.appendChild(item);
      });
    } else {
      const noResultsItem = document.createElement('li');
      noResultsItem.textContent = 'По вашему запросу ничего не найдено';
      list.appendChild(noResultsItem);
    }

    searchResults.appendChild(list);
  } else return;
}

function normalizeString(str) {
  return str
    .toLowerCase()
    .replace(/[-\s]/g, '')
    .trim();
}

export function initSearch() {
  if (searchElement !== null) {
    searchElement.addEventListener('input', (e) => {
      searchResults.innerHTML = '';
      searchLinks(e.target.value);

      if (e.target.value.length === 0) {
        searchResults.innerHTML = '';
      }
    });
  } else return;
}
