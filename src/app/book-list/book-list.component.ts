import { Component } from '@angular/core';
import { Book } from '../model/book';
import { BookAddComponent } from '../book-add/book-add.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookAddComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  title="Liste des nouveaux livres";
  //books contient des instanciations de Book
  books=[
    new Book(1,"Atomic Habits","James Clear",35),
    new Book(2,"Atomic Habits 2","James Clear",25),
    new Book(3,"Atomic Habits 3","James Clear",45) 
  ];

  action="";
  
  changeAction(action:string){
    this.action= action;
  }
  addBook(book:Book){
    this.books=[...this.books,book];//copier les elts du tab ancien et les ajoute ds le nvx tab qui va écraser l'ancien
    this.changeAction("");//masque le formulaire
  } 
}
