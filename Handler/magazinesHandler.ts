import { printTable } from 'console-table-printer';
import { magazineDao } from '../dataStore/DAO/magazineDao';
import {db} from '../dataStore/interface'
import { magazine } from '../types';
import fs from "fs";
import { parse } from "csv-parse";
import path from 'path';
import { Parser } from 'json2csv';
import { resolveModuleName } from 'typescript';

export class magazines implements magazineDao {


    getMagazineByISBN(ISBN: string): magazine | undefined {
        return db.getMagazineByISBN(ISBN)
    }
    getAllMagazines(): magazine[] {
        return db.getAllMagazines()
    }
    addMagazine(title: string, ISBN: string, authors: string, publishedAt: string): void {
        const mgzn : magazine = {
            title: title,
            ISBN: ISBN,
            authors: authors,
            publishedAt: publishedAt
        } 
        db.addMagazine(title , ISBN , authors , publishedAt)
    }
    
    readMagazinesFile () : Promise<this>  {

        return new Promise ((resolve , reject) => {
            let magazineFileName = path.join(__dirname , '../Files/magazines.csv')
            fs.createReadStream(magazineFileName)
            .pipe(parse({ delimiter: ";", from_line: 2 }))
            .on("data",  (row) => {
                this.addMagazine(row[0] , row[1] , row[2] , row[3])
            })
            .on("end",  () => {
            console.log("finished" );
            this.printMagazinesOnConsole()
            resolve(this)
            })
        }) 
    }


    exportToCSVFile(args : magazine[]){
        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(args);
        console.log((csv))
        fs.writeFileSync('file.csv' , csv) ; 
    }
    
    

    printMagazinesOnConsole(){
        printTable(this.getAllMagazines())
        
   }

}


