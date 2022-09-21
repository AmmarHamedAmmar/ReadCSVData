import { author, book, magazine } from "../types";
import { dataStore } from "./interface";


export class database implements dataStore {


    booksData: book[] = [];
    magazinesData: magazine[] = [];
    authorsData: author[] = [];

    getAllMagazines(): magazine[]  {
        return this.magazinesData ; 
    }

    getMagazineByISBN(ISBN: string): magazine | undefined {
        for(let i = 0 ; i < this.magazinesData.length ; i++) {
            if(this.magazinesData[i].ISBN == ISBN)
                return this.magazinesData[i] ; 
        }
        return undefined 
    }

    addMagazine(title: string, ISBN: string, authors: string, publishedAt: string): void {
        const magazine : magazine = {
            title: title,
            ISBN: ISBN,
            authors:authors,
            publishedAt: publishedAt
        }

        this.magazinesData.push(magazine)
    }

    getAuthorsByEmail(authorEmail: string): author[] {
        let author : author[] = [] ; 

    for(let i = 0 ; i < this.authorsData.length ; i++) {
        if(this.authorsData[i].email = authorEmail)
        author.push(this.authorsData[i]) ; 
    }
    return author 
    }


    getAllAuthors(): author[] {
        return this.authorsData ; 
    }

    addauthors(firstName: string, lastName: string, email: string): void {
        const author : author = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }

        this.authorsData.push(author)
    }


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