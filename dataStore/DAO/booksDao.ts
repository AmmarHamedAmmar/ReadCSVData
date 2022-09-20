import { book } from "../../types"

export interface booksDao {


    getBooksByEmail(authorEmail : string ) :  book[]
    getBookByISBN(ISBN : string ) : book | undefined
    getAllBooks() : book[] 
    addBook(title: string, ISBN: string, authors: string, description: string) : void

}