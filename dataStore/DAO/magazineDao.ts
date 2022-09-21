import { magazine } from "../../types"


export interface magazineDao {

    getMagazineByISBN(ISBN : string ) : magazine | undefined
    getAllMagazines() : magazine[] 
    addMagazine(title: string, ISBN: string, authors: string, publishedAt: string) : void

}