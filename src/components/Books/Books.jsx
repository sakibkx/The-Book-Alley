import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  
  const [books, setBooks] = useState([]);

  useEffect( () => {
    fetch('../../../public/Books.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

  return (
    <div>
      <h1 className="text-5xl font-bold font-serif text-center mb-12">Books</h1>
      <div className="grid grid-cols-3 gap-6 mb-32">
        {
          books.map( book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;