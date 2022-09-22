import { booksDao } from '../dataStore/DAO/booksDao';
import { book } from '../types';
import {db} from '../dataStore/interface'
import { printTable } from 'console-table-printer';
import fs from "fs";
import { parse } from "csv-parse";
import path from 'path';

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

  readBooksFile() : Promise<this> {

    return new Promise ((res, rej)=> {
        let booksFileName = path.join(__dirname , '../Files/books.csv')
        fs.createReadStream(booksFileName)
            .pipe(parse({ delimiter: ";", from_line: 2 }))
            .on("data", function (row) {
            new books().addBooks(row[0] , row[1] , row[2] , row[3])
    
            })
            .on("end",  () => {
            console.log("finished");
            //(new books().printBooksOnConsole())
            res(this)
            })
            .on("error", function (error) {
            console.log(error.message);
            });
    })


}

   printBooksOnConsole(){
       //printTable(this.getAllBooks())
       //console.log(this.getAllBooks())

  }
}
