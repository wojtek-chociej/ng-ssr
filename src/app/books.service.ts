import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { BooksEn } from '../mocks/books.en';
import { IBook } from '../models/book.model';
import { BooksPl } from '../mocks/books.pl';
import { CurrencyCode, LanguageId } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: IBook[];
  currencyCode: CurrencyCode = this.locale === 'en-US' ? '$' : 'zł';

  constructor(@Inject(LOCALE_ID) private locale: LanguageId) {
    this.books = this.getBooksByLocale(this.locale);
  }

  getBook(id: string) {
    return this.books.find(el => el.id === id);
  }

  getBooksByLocale(locale: LanguageId) {
    return locale === 'en-US' ? BooksEn : BooksPl;
  }
}
