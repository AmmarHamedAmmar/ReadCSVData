import { magazineDao } from '../dataStore/DAO/magazineDao';
import {db} from '../dataStore/interface'
import { magazine } from '../types';


class magazines implements magazineDao {



    getMagazineByISBN(ISBN: string): magazine | undefined {
       return db.getMagazineByISBN(ISBN)
    }
    getAllMagazines(): magazine[] {
        return db.getAllMagazines()
    }
    addMagazine(title: string, ISBN: string, authors: string, publishedAt: string): void {
        db.addMagazine(title , ISBN , authors , publishedAt)
    }

}