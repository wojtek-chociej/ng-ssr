import { Component, Input } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IBook } from '../../../models/book.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [DecimalPipe, CurrencyPipe, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input({required: true}) book!: IBook;
}
