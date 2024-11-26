import { SlArrowDown } from "react-icons/sl";
import TabsAndContent from "../TabsAndContent/TabsAndContent";
import { useEffect, useState } from "react";
import { getStoredReadBooks, getStoredWishlistedBooks } from "../../utilities/localStorage";

const ListedBooks = () => {
  // Clear all session storage data
  sessionStorage.clear();

  const [active, setActive] = useState(false);
  const [books, setBooks] = useState([]);
  const [sortedReadBooks, setSortedReadBooks] = useState([]);
  const [sortedWishlist, setSortedWishlist] = useState([]);

  const readBooks = getStoredReadBooks();
  const wishList = getStoredWishlistedBooks();

  // Fetch Books JSON
  useEffect(() => {
    fetch("/Books.json") // Ensure the JSON file is served from the "public" folder.
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        // Initialize sorted lists based on stored IDs
        setSortedReadBooks(readBooks.map((id) => data[id - 1]));
        setSortedWishlist(wishList.map((id) => data[id - 1]));
      });
  }, []);

  const handleToggle = () => {
    setActive(!active); // Toggle the `active` state on click
  };

  const handleSortBy = (term) => {
    const sortedByReadBooks = [...sortedReadBooks].sort((a, b) => b[term] - a[term]);
    const sortedByWishlist = [...sortedWishlist].sort((a, b) => b[term] - a[term]);

    setSortedReadBooks(sortedByReadBooks);
    setSortedWishlist(sortedByWishlist);

    // Save sorted IDs back to localStorage
    const sortedReadBooksIds = sortedByReadBooks.map((book) => book.bookId);
    localStorage.setItem("read-books", JSON.stringify(sortedReadBooksIds));

    const sortedWishlistIds = sortedByWishlist.map((book) => book.bookId);
    localStorage.setItem("wishlist", JSON.stringify(sortedWishlistIds));
  };

  return (
    <div>
      {/* Title Section */}
      <div className="bg-zinc-200 py-8 text-center mx-6 rounded-3xl mb-8">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>

      {/* Dropdown Menu */}
      <div className={`flex justify-center ${active ? "mb-48" : "mb-14"}`}>
        <details
          className="dropdown dropdown-bottom flex gap-4 items-center text-base font-semibold text-white"
          onToggle={handleToggle}
        >
          <summary className="btn bg-success border-0 font-semibold text-white flex items-center gap-2 hover:bg-green-700 active:bg-green-800">
            Sort By <SlArrowDown />
          </summary>
          <ul className="menu dropdown-content bg-zinc-300 rounded-lg p-2 shadow mt-4 text-nowrap absolute left-1/2 transform -translate-x-1/2">
            <li>
              <button
                className="btn bg-zinc-300 border-0 w-full text-left hover:bg-zinc-400 active:bg-zinc-500 text-black"
                onClick={() => handleSortBy("rating")}
              >
                Rating
              </button>
            </li>
            <li>
              <button
                className="btn bg-zinc-300 border-0 w-full text-left hover:bg-zinc-400 active:bg-zinc-500 text-black"
                onClick={() => handleSortBy("totalPages")}
              >
                Number of Pages
              </button>
            </li>
            <li>
              <button
                className="btn bg-zinc-300 border-0 w-full text-left hover:bg-zinc-400 active:bg-zinc-500 text-black"
                onClick={() => handleSortBy("yearOfPublishing")}
              >
                Publishing Year
              </button>
            </li>
          </ul>
        </details>
      </div>

      {/* Tabs and Content */}
      <TabsAndContent />
    </div>
  );
};

export default ListedBooks;
