import { authorsDao } from "./DAO/authorsDao";
import { booksDao } from "./DAO/booksDao";


export interface dataStore extends booksDao , authorsDao , magazines {
    
}

export  let db : dataStore ; 
