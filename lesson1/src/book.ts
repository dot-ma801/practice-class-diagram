export class Book {
    private title: string;
    private auther: string;
    private isbn: string;

    constructor(title: string, auther: string, isbn: string) {
        this.title = title;
        this.auther = auther;
        this.isbn = isbn;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuther(): string {
        return this.auther;
    }

    public getIsbn(): string {
        return this.isbn;
    }
}
