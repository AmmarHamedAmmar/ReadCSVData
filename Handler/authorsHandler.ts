import { printTable, Table } from "console-table-printer";
import { authorsDao } from "../dataStore/DAO/authorsDao";
import { db } from "../dataStore/interface";
import { author } from "../types";
import fs from "fs";
import { parse } from "csv-parse";
import path from 'path';

export class authors implements authorsDao   {


    p = new Table();


    getAuthorsByEmail(authorEmail: string): author[] {
        return db.getAuthorsByEmail(authorEmail) ; 
    }
    getAllAuthors(): author[] {
        return db.getAllAuthors()
    }
    addauthors(firstName: string, lastName: string, email: string): void {
        db.addauthors(firstName , lastName , email)
    }

    readAuthorsFile() {
        let authorsFileName = path.join(__dirname , '../Files/authors.csv')
        fs.createReadStream(authorsFileName)
        .pipe(parse({ delimiter: ";", from_line: 2 }))
        .on("data", function (row) {
        new authors().addauthors(row[1] , row[2] , row[0] )

        })
        .on("end", function () {
        console.log("finished");
        (new authors().printAuthorsOnConsole())
        })
        .on("error", function (error) {
        console.log(error.message);
        });



    }

    printAuthorsOnConsole(){
        this.p.addRows(this.getAllAuthors())
        this.p.printTable();
   }

}