import { Book } from "./book"
import { Library } from "./library"

const library = new Library();

const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', '123456789');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '987654321');

library.addBook(book1);
library.addBook(book2);

// Bookオブジェクトを表示
console.log(library.findBookByTitle('To Kill a Mockingbird'));
library.removeBook('123456789');
// nullを表示
console.log(library.findBookByTitle('The Catcher in the Rye')); 