import { authorsDao } from "./DAO/authorsDao";
import { booksDao } from "./DAO/booksDao";
import { magazine } from "./DAO/magazinDao";
import { database } from "./database";


export interface dataStore extends booksDao , authorsDao ,magazine {
    
}

export  let db : dataStore = new database() ; 
