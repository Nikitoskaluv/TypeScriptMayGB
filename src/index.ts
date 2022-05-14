import { Book } from './book.js';
import { books } from './books-collection.js';

function findSuitableBook(genre: string, pagesLimit: number, multiple = true): Book | Book[] {
  function searchAlgorithm(book: { genre: string; pageAmount: number }) {
    return book.genre === genre && book.pageAmount <= pagesLimit
  }
  if (multiple) {
    return books.filter(searchAlgorithm);
  } else {
    return books.find(searchAlgorithm);
  }
}
const book = findSuitableBook('fantasy', 1000);

if (book instanceof Book) {
  console.log(book.genre);
} else {
  console.log(book[0]);
}
