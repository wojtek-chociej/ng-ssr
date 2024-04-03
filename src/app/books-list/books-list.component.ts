import { Component } from '@angular/core';
import { BookComponent } from './book/book.component';
import { RouterLink } from '@angular/router';
import { IBook } from '../../models/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [RouterLink, BookComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss',
})
export class BooksListComponent {

  date = new Date();
  books: IBook[] = this.booksService.books;

  constructor(private booksService: BooksService) {}
}
