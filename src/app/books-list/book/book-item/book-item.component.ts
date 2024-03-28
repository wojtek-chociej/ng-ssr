import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BooksService } from '../../../books.service';
import { IBook } from '../../../../models/book.model';
import { CurrencyPipe } from '@angular/common';
import { CurrencyCode } from '../../../../models/types';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  book: IBook | undefined = this.booksService.getBook(
    this.route.snapshot.params['id']
  );
  currencyCode: CurrencyCode = this.booksService.currencyCode;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}
}
