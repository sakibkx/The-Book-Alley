import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [showBooks, setShowBooks] = useState(6); // Initial state
  const [expand, setExpand] = useState(false); // Track expansion state
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position
  const getStoredScrollPosition = sessionStorage.getItem("scrollPosition");

  // Fetch books data
  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));

    // Check if showBooks state is in sessionStorage
    const savedShowBooks = sessionStorage.getItem("showBooks");
    if (savedShowBooks) {
      setShowBooks(Number(savedShowBooks));
      setExpand(Number(savedShowBooks) === books.length); // Adjust the expand state based on stored value
    }
  }, [books.length]);

  // Handle the Expand/Show All button click
  const handleExpand = () => {
    // Save the current scroll position
    setScrollPosition(window.scrollY);

    const newExpandState = !expand;
    setExpand(newExpandState);

    if (newExpandState) {
      setShowBooks(books.length);
      sessionStorage.setItem("showBooks", books.length); // Store the updated value
    } else {
      setShowBooks(6);
      sessionStorage.setItem("showBooks", 6); // Store the updated value
    }
  };

  useEffect(() => {
    // Restore scroll position after content updates
    if (expand || !expand) {
      window.scrollTo(0, scrollPosition);
    }

    if(getStoredScrollPosition){
      window.scrollTo(0, getStoredScrollPosition);
    }
  }, [showBooks, scrollPosition, expand, getStoredScrollPosition]);

  return (
    <div>
      <h1 className="text-5xl font-bold font-serif text-center mb-12">Books</h1>
      <div className="grid grid-cols-3 gap-6 mb-20">
        {books.slice(0, showBooks).map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleExpand}
          className="btn btn-success text-white text-xl font-bold mb-24"
        >
          {expand ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Books;
