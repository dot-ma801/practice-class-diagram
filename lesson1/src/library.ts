import { Book } from "./book"

export class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public removeBook(isbn: string): void {
        this.books = this.books.filter((item) => { item.getIsbn() != isbn });
    }

    public findBookByTitle(title: string): Book | null {
        let result: Book | null = null;
        result = this.books.find((item) => item.getTitle() == title) ?? null;
        return result;
    }
}
