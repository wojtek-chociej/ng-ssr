import { Component, Inject, LOCALE_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { BooksService } from '../books.service';
import { LanguageId, LanguageName } from '../../models/types';
import { IBook } from '../../models/book.model';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  currentLang: LanguageName = this.locale === 'en-US' ? 'English' : 'Polski';
  showDropdown: boolean = false;
  books: IBook[] = this.booksService.books;

  constructor(
    @Inject(LOCALE_ID) private locale: LanguageId,
    private booksService: BooksService
  ) {}

  showDropdownLang() {
    this.showDropdown = !this.showDropdown;
  }

  nextLang(localeId: LanguageId) {
    this.booksService.getBooksByLocale(localeId);
    this.showDropdown = false;
  }
}
