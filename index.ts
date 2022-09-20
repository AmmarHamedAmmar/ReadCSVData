import fs from "fs";
import { parse } from "csv-parse";
import path from 'path';
import { authors } from "./Handler/authorsHandler";
import { books } from "./Handler/booksHandler";

let booksFileName = path.join(__dirname , './Files/books.csv')
let magazineFileName = path.join(__dirname , './Files/magazines.csv')
let authorsFileName = path.join(__dirname , './Files/authors.csv')

let i = 0 ; 

fs.createReadStream(booksFileName)
  .pipe(parse({ delimiter: ";", from_line: 2 }))
  .on("data", function (row) {
    new books().addBooks(row[0] , row[1] , row[2], row[3])

  })
  .on("end", function () {
    console.log("finished");
    //console.log(new books().dataRef)
  })
  .on("error", function (error) {
    console.log(error.message);
  });




  