import { useEffect, useState } from "react";
import { FaRegCalendarAlt, FaRegFileAlt } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ShowListedBook = ({ book }) => {
  const id = book; // Assuming `book` prop contains the book ID
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    // Fetch books data only if not already fetched
    fetch("/Books.json") // Use the public folder's absolute path
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((b) => b.bookId == id); // Match book by ID
        setCurrentBook(foundBook || null); // Handle case where book is not found
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, [id]);

  // If the book isn't loaded yet, show a loading indicator
  if (!currentBook) {
    return (
      <div className="text-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  // Destructure book details
  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = currentBook;

  return (
    <div className="border border-zinc-200 rounded-3xl p-6 mt-8 flex flex-col md:flex-row gap-6">
      {/* Book Image */}
      <div className="bg-zinc-200 px-12 py-8 rounded-2xl w-fit h-fit">
        <img src={image} alt="Book Cover" className="h-44" />
      </div>

      {/* Book Details */}
      <div className="w-full">
        <div className=" border-b border-zinc-200">
          <h1 className="text-2xl font-bold font-serif text-black mb-2">{bookName}</h1>

          <h2 className="font-medium">By: {author}</h2>

          <div className="mt-4 flex items-center gap-12">
            <div className="flex items-center">
              <span className="font-bold text-black">Tags:    </span>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="ml-2 bg-green-100 text-green-600 py-1 px-3 rounded-full ms-6"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 font-medium">
              <FaRegCalendarAlt />
              <h2>Year of Publishing: {yearOfPublishing}</h2>
            </div>
          </div>

          <div className="my-4 flex items-center gap-12 font-medium">
            <div className="flex items-center gap-2">
              <HiOutlineUsers />
              <h2>Publisher:   {publisher}</h2>
            </div>
            <div className="flex items-center gap-2">
              <FaRegFileAlt />
              <h2>Pages: {totalPages}</h2>
            </div>
          </div>
        </div>

        <div className="text-lg mt-6 font-medium">
          <span className="bg-blue-200 text-blue-500 px-5 py-3 rounded-3xl ">Category: {category}</span>
          <span className="bg-orange-200 text-orange-500 text-blue-500 px-5 py-3 rounded-3xl mx-3">Rating: {rating}</span>
          <Link className="bg-success text-white px-5 py-3 rounded-3xl " to={`/book/${id}`}>
              View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowListedBook;
