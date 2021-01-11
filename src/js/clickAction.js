import render from './renderPage.js';
import refs from './refs.js';
import fetchLogic from './apiService';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import pagination from './pagination.js';

export default {
  handlingPaginationBtn() {
    refs.cardsList.innerHTML = '';

    const currentPage = pagination.getCurrentPage();
    fetchLogic.page = currentPage;
    render.renderPage();
  },

  modalOpen(e) {
    console.dir(e.target);
    if (e.target.nodeName === 'IMG') {
      const fullHD = e.target.dataset.highresolution;
      const instance = basicLightbox.create(`
                <img src="${fullHD}" />
              `);
      instance.show();
    }
  },
};
