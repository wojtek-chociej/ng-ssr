import { Injectable } from '@angular/core';
import { Books } from '../mocks/books';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: IBook[] = Books;

  constructor() {}

  getBook(id: string) {
    return this.books.find(el => el.id === id);
  }
}
