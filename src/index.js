import './styles.css';

import refs from './js/refs.js';
import onSubmitSearch from './js/submitAction';
import click from './js/clickAction';
import pageRender from './js/renderPage.js';

refs.form.addEventListener('submit', onSubmitSearch);
refs.pagesContainer.addEventListener('click', click.handlingPaginationBtn);
refs.cardsList.addEventListener('click', click.modalOpen);
refs.btnTop.addEventListener('click', pageRender.scrollToTop);
