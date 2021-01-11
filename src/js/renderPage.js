import refs from './refs.js';
import template from '../templates/cards.hbs';
import fetchLogic from './apiService';
import handleErrors from './notification.js';
import pagination from './pagination.js';

const ERROR_NOTIFICATION = 'Nothing has been found. Try again!';

export default {
  async renderPage() {
    try {
      const { hits, totalHits } = await fetchLogic.fetchContent();
      pagination.setTotalItems(totalHits);
      pagination.movePageTo(fetchLogic.page);

      // console.log(pagination);

      const markup = await template(hits);
      refs.pagesContainer.style.display = 'block';
      refs.cardsList.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
      console.log('ERROR', error);
      handleErrors(ERROR_NOTIFICATION);
    }
  },
};
