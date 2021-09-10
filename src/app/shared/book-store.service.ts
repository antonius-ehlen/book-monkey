import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  books: Book[];

  constructor() {
    this.books = [
      {
        isbn: '9783864907791',
        title: 'Angular',
        authors: ['Fer Mal', 'Joh Hop', 'Dan Kop'],
        published: new Date(2020,8,1),
        subtitle: 'Grundl., fortg. Themen und Best Practices',
        rating: 5,
        thumbnails: [{
          url: 'https://api4.angular-buch.com/images/angular_auflage3.jpg',
          title: 'Buchcover'
        }],
        description: 'Angular gezeigt am praktischen Beispiel!'
      },
      {
        isbn: '9783864907000',
        title: 'React',
        authors: ['Oli Zei', 'Nil Har'],
        published: new Date(2019,11,12),
        subtitle: 'Grundl., fortg. Thechn. & Praxistipps',
        rating: 6,
        thumbnails: [{
          url: 'https://ng-buch.de/react-cover.jpg',
          title: 'Buchcover'
        }],
        description: 'Ein Buch zu React'
      }
    ]
   }

   getAllBooks(): Book[] {
     return this.books;
   }
}
