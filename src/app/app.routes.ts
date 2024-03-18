import { Routes } from '@angular/router';
import { BookItemComponent } from './books-list/book/book-item/book-item.component';
import { BooksListComponent } from './books-list/books-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'books', component: BooksListComponent },
  { path: 'books/:id', component: BookItemComponent },
];
