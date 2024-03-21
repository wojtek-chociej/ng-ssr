import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BooksService } from '../../../books.service';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { IBook } from '../../../../models/book.model';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [DecimalPipe, CurrencyPipe, RouterLink],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  book: IBook | undefined = this.booksService.getBook(this.route.snapshot.params['id']);

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) { }
}
