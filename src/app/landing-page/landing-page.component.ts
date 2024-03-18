import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InfoCardComponent } from './info-card/info-card.component';
import { NgClass } from '@angular/common';
import { Books } from '../../mocks/books';
import { FooterComponent } from '../footer/footer.component';
import { IBook } from '../../models/book.model';
import { IInfoCard } from '../../models/info-card.model';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, InfoCardComponent, NgClass, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  books: IBook[] = Books;

  componentInformation: IInfoCard[] = [
    {
      title: 'WYBÓR KSIĄŻEK',
      description:
        'Aż 12 jednoznadniowych opisów do najpopularniejzych książek wszechczasów!',
      svg: '../../assets/icons/book-reader.svg',
      cssClass: 'light-green-ellipse',
    },
    {
      title: 'ULUBIONA STRONA',
      description:
        '100% badanych (czyli dwie na dwie osoby) zarzeka się, że strona całkiem OK!',
      svg: '../../assets/icons/heart.svg',
      cssClass: 'dark-green-ellipse',
    },
    {
      title: 'KONTAKT',
      description:
        'Zachęcamy do kontaktu, ale i tak nie odpiszemy na Twoje maile.',
      svg: '../../assets/icons/envelope.svg',
      cssClass: 'light-green-ellipse',
    },
  ];
}
