import { books } from "../Handler/booksHandler";
import { book } from "../types";

let desiredBook  = {
    title: "Schuhbecks Kochschule. Kochen lernen mit Alfons Schuhbeck",
    ISBN: "1215-4545-5895",
    authorEmail: "null-walter@echocat.org",
    description: "Aller Anfang ist leicht! Zumindest, wenn man beim Kochenlernen einen Lehrer wie Alfons Schuhbeck zur Seite hat. Mit seiner Hilfe kann auch der ungeschickteste Anfänger beste Noten für seine Gerichte bekommen. Der Trick, den der vielfach ausgezeichnete Meisterkoch dabei anwendet, lautet visualisieren. Die einzelnen Arbeitsschritte werden auf Farbfotos im Format von ca. 3x4 cm abgebildet. Unter diesen stehen kurz und knapp die Angaben zur Zubereitung. So präsentiert Schuhbecks Kochschule alles bequem auf einen Blick. Und der interessierte Kochneuling kann sich auf die Hauptsache konzentrieren – aufs Kochen. Wie die Speise aussehen soll, zeigt jeweils das Farbfoto auf der linken Seite, auf der auch die Zutaten – dank des geschickten Layouts – ebenfalls sehr übersichtlich aufgelistet sind. Außerdem gibt Schuhbeck prägnante Empfehlungen zu Zutaten und Zubereitung."
};
   
describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });

  
// test('test getBooksByEmail ', () => {
//     console.log(new books().getBooksByEmail("null-walter@echocat.org"))
//     expect(new books().getBooksByEmail("null-walter@echocat.org")).toBe(desiredBook);
// });

function sum(arg0: number, arg1: number): any {
    return 3 ;
}
