
import { authors } from "./Handler/authorsHandler";
import { books } from "./Handler/booksHandler";
import {magazines} from './Handler/magazinesHandler'

let i = 0 ; 


//(new magazines().readMagazinesFile())
// async function  mag () {
//    (await new magazines().readMagazinesFile())

// }  
// console.log("mag funcc re",mag())

// mag()




(async ()=> {
    await new magazines().readMagazinesFile().then(e => {
        console.log("this is e ", e.getAllMagazines())
    })
    new books().readBooksFile()

})()


 //let magazineObj = 
 //magazineObj.getMagazineByISBN("5454-5587-3210")
//new books().readBooksFile()
// new authors().readAuthorsFile()





  