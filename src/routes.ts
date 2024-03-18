import {Express, Request, Response, NextFunction } from "express";

function routes(app: Express) {

    let books: { bookId: number, title: string, author: string }[] = [];
    let Id = 1; // Used to generate unique IDs for new books

 
    app.post("/api/addbook", (req: Request, res: Response) => {
        
        const { title, author } = req.body;

        const bookId = Id++;
    
        // Add the book to the array
        books.push({ bookId ,title, author });
    
        // Send back a success response
        return res.status(201).json({ message: "Book added successfully", book: { title, author } });
    });

    app.get("/api/getallbooks", (req: Request, res: Response) => {
        
        return res.status(200).json(books);
    });

    app.patch("/api/updatebook", (req: Request, res: Response) => {
        
        const { id , title, author } = req.body;
    
        const index = books.findIndex(book => book.bookId === id);

        
        if (index === -1) {
            return res.status(404).send("Book not found.");
        }
    
        
            books[index].title = title;
        
            books[index].author = author;
        

        return res.status(200).json( books[index]);
    });

    app.delete("/api/deletebook",(req:Request, res: Response) => {

        const id = parseInt(req.query.id as string);

        const index = books.findIndex(book => book.bookId === id);

    
    if (index === -1) {
        return res.status(404).send("Book not found.");
    }

    books.splice(index, 1);

    return res.status(204).send();

    });     
     
}
export default routes; 