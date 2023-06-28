class BooksState {
  constructor() {}

  data = [];
  error = null;
  totalPages = null;
  currentPage = 1;

  #isLoading = false;
  isError = false;

  set isLoading (value) {
    this.#isLoading = value;
  }
}

export const state = new BooksState();
