import { Routes } from '@angular/router';
import { BookItemComponent } from './books-list/book/book-item/book-item.component';
import { BooksListComponent } from './books-list/books-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, data: { revalidate: 30 }, },
  { path: 'books', component: BooksListComponent, data: { revalidate: 30 }, },
  { path: 'books/:id', component: BookItemComponent, data: { revalidate: 30 }, },
];
