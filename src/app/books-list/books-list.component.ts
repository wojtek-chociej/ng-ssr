import { Component } from '@angular/core';
import { BookComponent } from './book/book.component';
import { RouterLink } from '@angular/router';
import { Books } from '../../mocks/books';
import { IBook } from '../../models/book.model';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [RouterLink, BookComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss',
})
export class BooksListComponent {
  books: IBook[] = Books;
}
