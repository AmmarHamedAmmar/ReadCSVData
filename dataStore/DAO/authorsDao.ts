import { author } from "../../types"


export interface authorsDao {

    getAuthorsByEmail(authorEmail : string ) :  author[]
    getAllAuthors() : author[] 
    addauthors(firstName: string, lastName: string, email: string) : void

}