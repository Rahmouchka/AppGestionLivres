import { Component } from '@angular/core';
import { Book } from '../model/book';
import { BookAddComponent } from '../book-add/book-add.component';
import { BookEditComponent } from "../book-edit/book-edit.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookAddComponent, BookEditComponent],
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
  bookToEdit?:Book;

  changeAction(action:string){
    this.action= action;
  }

  addBook(book:Book){
    this.books=[...this.books,book];//copier les elts du tab ancien et les ajoute ds le nvx tab qui va écraser l'ancien
    this.changeAction("");//masque le formulaire
  }

  editBook(book:Book){
    this.books=this.books.map(
      currentBook=>currentBook.id===book.id?book:currentBook
      //si l'id de currentBook est égale à celui de book (qui est modifié)
      //on retourne le book (qui est modifié) et on passe à l'indice suivant
      //sinon on retourne currentBook et on passe à l'indice suivant
    )
    this.changeAction("");
  }

  showEditForm(book:Book){
    this.changeAction('edit');
    this.bookToEdit=book;
    console.log(this.bookToEdit);
  }

  deleteBook(id:number){
    if(confirm("Êtes-vous sûr de vouloir supprimer le livre?")){
      this.books=this.books.filter(currentBook=>currentBook.id!==id);
    }
  }
}
