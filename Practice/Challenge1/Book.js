class Book {
  constructor(
    title,
    author,
    ISBN,
    price,
    publishedDate,
    publisher,
    pages,
    description,
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.price = price;
    this.publishedDate = publishedDate;
    this.publisher = publisher;
    this.pages = pages;
    this.description = description;
  }
  updateCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
  }
  updateTotalPages(newTotalPages) {
    this.totalPages = newTotalPages;
  }
}

export default Book;
