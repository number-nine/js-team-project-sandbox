class BooksState {
  constructor() {}

  data = [];
  error = null;
  totalPages = null;
  currentPage = 1;

  isLoading = false;
  isError = false;
}

export const state = new BooksState();
