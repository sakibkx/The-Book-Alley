import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineStarBorder } from "react-icons/md";

const ShowDetails = () => {
  const { id } = useParams(); // Extract the book ID from the URL
  const navigate = useNavigate(); // React Router hook for navigation
  const location = useLocation(); // Access passed state (if any)
  const [book, setBook] = useState(location.state?.book || null); // Use book data from state if available
  const [loading, setLoading] = useState(!book);

  useEffect(() => {
    if (!book) {
      fetch('../../../public/Books.json') // Adjust the path if necessary
        .then((res) => res.json())
        .then((data) => {
          const foundBook = data.find((b) => b.bookId == id);
          setBook(foundBook);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching book details:", error);
          setLoading(false);
        });
    }
  }, [id, book]);

  if (loading) {
    return  <div className="text-center">
              <span className="loading loading-bars loading-lg"></span>
            </div>;
  }

  if (!book) {
    return <div className="text-center">Book not found.</div>;
  }

  return (
    <div className="p-6">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)} // Navigate to the previous page
        className="btn btn-success text-white text-xl font-bold mb-8"
      >
        Go Back
      </button>

      <div className="flex flex-col items-center md:flex-row gap-12 mb-24">
        <div className="bg-zinc-200 rounded-3xl px-16 py-16 w-full md:w-2/5 h-auto">
          <img src={book.image} alt={book.bookName} />

        </div>
        <div className="text-base text-slate-500">
          <h1 className="text-5xl text-black font-bold font-serif mb-4">{book.bookName}</h1>
          
          <h4 className="text-2xl font-medium pb-6 border-b-2 border-slate-400">By: {book.author}</h4>
          
          <h4 className="text-2xl font-medium mb-6 py-4 border-b-2 border-slate-400">{book.category}</h4>
          
          <p><span className="font-bold text-black">Review : </span> {book.review}</p>

          <div className="py-6 border-b-2 border-slate-400">
            <span className="font-bold text-black">Tag</span>
            {
              book.tags.map( (tag, index) => <span key={index} className="bg-green-50 text-base text-success font-medium py-2 px-4 rounded-3xl ms-4">#{tag}</span> )
            }
          </div>

          <div className="mt-6 mb-8 flex gap-16">
            <div className="flex flex-col gap-3">
              <p>Number of Pages :</p>
              <p>Publisher :</p>
              <p>Year of Publishing :</p>
              <p>Rating :</p>
            </div>
            <div className="flex flex-col gap-3 text-black font-semibold">
              <p>{book.totalPages}</p>
              <p>{book.publisher}</p>
              <p>{book.yearOfPublishing}</p>
              <p>{book.rating}</p>
            </div>
          </div>

          <div className="text-xl font-semibold">
            <button className="btn btn-outline me-4"><span className="text-black">Read</span></button>
            <button className="btn btn-info text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
