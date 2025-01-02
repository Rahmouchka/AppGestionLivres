import { Component,EventEmitter,Input,Output} from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  //"?" pr forcer ts a lire la var sans l'initialiser
  @Input() lastId?:number;
  @Output() bookCreated=new EventEmitter<Book>();

  addBook(title:string,author:string,price:number){
    const newBook=new Book(
      // "!" je garantis qu'elle sera initialisée
      this.lastId! +1,
      title,
      author,
      price
    );
    this.bookCreated.emit(newBook);
  }
}
