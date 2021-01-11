import refs from './refs.js';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const options = {
  totalItems: 0,
  itemsPerPage: 0,
  visiblePages: 5,
};
let pagination = new Pagination(refs.pagesContainer, options);
refs.pagesContainer.style.display = 'none';

// console.log(pagination);

export default pagination;
