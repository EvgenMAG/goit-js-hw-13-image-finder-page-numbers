const key = '19688352-7c772d0e763de7aee127ab308';

const newService = {
  searchReq: 'moon',
  perPage: 12,
  page: 1,

  get query() {
    return this.searchReq;
  },

  set query(request) {
    this.searchReq = request;
  },

  async fetchContent() {
    try {
      const baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchReq}&page=${this.page}&per_page=${this.perPage}&key=${key}`;
      const response = await fetch(baseURL);
      if (!response.ok) throw new Error('Error feching data');
      const { hits, totalHits } = await response.json();
      if (hits.length === 0) {
        throw new Error('Error feching data');
      }
      return { hits, totalHits };
    } catch (error) {
      throw error;
    }
  },

  resetPage() {
    this.page = 1;
  },
};

export default newService;
