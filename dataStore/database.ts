import { author, book, magazine } from "../types";
import { dataStore } from "./interface";


export class database implements dataStore {


    booksData: book[] = [];
    magazinesData: magazine[] = [];
    authorsData: author[] = [];


    getBooksByEmail(authorEmail: string): book[] {
        let authorBooks : book[] = [] ; 

    for(let i = 0 ; i < this.booksData.length ; i++) {
        if(this.booksData[i].authorEmail = authorEmail)
            authorBooks.push(this.booksData[i]) ; 
    }
    return authorBooks 
    }
    getBookByISBN(ISBN: string): book | undefined {
        for(let i = 0 ; i < this.booksData.length ; i++) {
            if(this.booksData[i].ISBN == ISBN)
                return this.booksData[i] ; 
        }
        return undefined 
    }
    getAllBooks(): book[] {
        return this.booksData
    }

    addBooks(title: string, ISBN: string, authors: string, description: string): void {
        const Book : book =  {
            title: title,
            ISBN: ISBN,
            authorEmail: authors,
            description: description
        }
        this.booksData.push(Book)
        //console.log(this.booksData)
    }
    
}