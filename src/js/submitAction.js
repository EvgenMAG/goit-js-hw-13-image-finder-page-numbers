import fetchLogic from './apiService';
import refs from './refs.js';
import pageRender from './renderPage.js';
import pagination from './pagination.js';

import handleErrors from './notification.js';

const EMPTYFINPUT_NOTIFICATION =
  'You forgot to ask us something. PLease write your request! ';

function onSubmitSearch(e) {
  e.preventDefault();
  const inputRequest = e.target.elements.query.value;
  if (inputRequest === '') {
    handleErrors(EMPTYFINPUT_NOTIFICATION);
    return;
  }

  pagination.setItemsPerPage(fetchLogic.perPage);
  pagination.movePageTo(1);

  fetchLogic.query = inputRequest;
  refs.cardsList.innerHTML = '';

  fetchLogic.resetPage();

  pageRender.renderPage();

  refs.form.reset();
}

export default onSubmitSearch;
