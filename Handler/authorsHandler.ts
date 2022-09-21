import { authorsDao } from "../dataStore/DAO/authorsDao";
import { db } from "../dataStore/interface";
import { author } from "../types";


export class authors implements authorsDao   {


    getAuthorsByEmail(authorEmail: string): author[] {
        return db.getAuthorsByEmail(authorEmail) ; 
    }
    getAllAuthors(): author[] {
        return db.getAllAuthors()
    }
    addauthors(firstName: string, lastName: string, email: string): void {
        db.addauthors(firstName , lastName , email)
    }

}