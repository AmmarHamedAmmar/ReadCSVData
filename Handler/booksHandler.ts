import { booksDao } from '../dataStore/DAO/booksDao';
import { book } from '../types';
import {db} from '../dataStore/interface'


export class books implements booksDao {

  public title!: string;
  public ISBN!: string;
  public authors!: string;
  public description!: string;


  getBooksByEmail(authorEmail: string): book[]  {

    return db.getBooksByEmail(authorEmail)
    
  }
  getBookByISBN(ISBN: string): book | undefined {

    return db.getBookByISBN(ISBN)
  }


  getAllBooks(): book[] {
    return db.getAllBooks()
  }

  
  addBooks(title: string, ISBN: string, authors: string, description: string): void {
    db.addBooks(title , ISBN , authors , description)
}
}
