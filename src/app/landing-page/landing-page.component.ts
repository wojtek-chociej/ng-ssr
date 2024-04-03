import {Component, Inject, LOCALE_ID} from '@angular/core';
import {RouterLink} from '@angular/router';
import {InfoCardComponent} from './info-card/info-card.component';
import {NgClass} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {IBook} from '../../models/book.model';
import {IInfoCard} from '../../models/info-card.model';
import {BooksService} from '../books.service';
import {infoCardEn} from '../../mocks/info-card.en';
import {LanguageId} from '../../models/types';
import {infoCardPl} from "../../mocks/info-card.pl";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, InfoCardComponent, NgClass, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  books: IBook[] = this.booksService.books;
  infoCards: IInfoCard[] = this.locale === 'en-US' ? infoCardEn : infoCardPl;

  date = new Date();

  constructor(
    private booksService: BooksService,
    @Inject(LOCALE_ID) private locale: LanguageId
  ) {
  }
}
