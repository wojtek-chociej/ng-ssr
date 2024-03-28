import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IBook } from '../../../models/book.model';
import { CurrencyPipe } from '@angular/common';
import { CurrencyCode } from '../../../models/types';
import { BooksService } from '../../books.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input({ required: true }) book!: IBook;
  currencyCode: CurrencyCode = this.booksService.currencyCode;

  constructor(private booksService: BooksService) {}
}
