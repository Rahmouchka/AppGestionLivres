import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  @Input() bookToEdit?:Book;
  @Output() bookEdited= new EventEmitter<Book>();

  editBook(title:string,author:string,price:number){
    const newBook=new Book(
      this.bookToEdit!.id,
      title,
      author,
      price
    );
    this.bookEdited.emit(newBook);
  }
}
