
import { authors } from "./Handler/authorsHandler";
import { books } from "./Handler/booksHandler";
import {magazines} from './Handler/magazinesHandler'


(async ()=> {

    await new magazines().readMagazinesFile().then(e => {
        console.log("this is e ", e.getAllMagazines())
    })
    new books().readBooksFile()

})()




  