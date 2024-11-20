import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

  const [books, setBooks] = useState([]);
  const [showBooks, setShowBooks] = useState(6);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    fetch('../../../public/Books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  const handleExpand = () => {
    setExpand((prevExpand) => {
      const newExpand = !prevExpand; // Calculate the new state
      setShowBooks(newExpand ? books.length : 6); // Update showBooks based on new state

      // Scroll to the top of the page
    window.scrollTo({
      top: 700,      // Scroll to the top of the page
      behavior: 'smooth', // Smooth scrolling animation
    });

      return newExpand; // Return the new state for setExpand
    });
  };
  
  return (
    <div>
      <h1 className="text-5xl font-bold font-serif text-center mb-12">Books</h1>
      <div className="grid grid-cols-3 gap-6 mb-20">
        {
          books.slice(0, showBooks).map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
      <div className="flex justify-center 
      ">
        <button onClick={handleExpand} className="btn btn-success text-white text-xl font-bold mb-24 ">{expand? "Show Less": "Show All"}</button>
      </div>
    </div>
  );
};

export default Books;