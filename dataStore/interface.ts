import { authorsDao } from "./DAO/authorsDao";
import { booksDao } from "./DAO/booksDao";
import { magazineDao } from "./DAO/magazineDao";
import { database } from "./database";


export interface dataStore extends booksDao , authorsDao ,magazineDao {
    
}

export  let db : dataStore = new database() ; 
