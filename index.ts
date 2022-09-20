import fs from "fs";
import { parse } from "csv-parse";
import path from 'path';
import { authors } from "./Handler/authorsHandler";
import { books } from "./Handler/booksHandler";

let fileName = path.join(__dirname , './Files/books.csv')
let i = 0 ; 

fs.createReadStream(fileName)
  .pipe(parse({ delimiter: ";", from_line: 2 }))
  .on("data", function (row) {
    new books().addBook(row[0] , row[1] , row[2], row[3])

  })
  .on("end", function () {
    console.log("finished");
    //console.log(new books().dataRef)
  })
  .on("error", function (error) {
    console.log(error.message);
  });




  