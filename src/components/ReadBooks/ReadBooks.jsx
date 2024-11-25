import { getStoredReadBooks } from "../../utilities/localStorage";
import ShowListedBook from "../ShowListedBook/ShowListedBook";

const ReadBooks = () => {
  
  const readBooks = getStoredReadBooks();
  
  return (
    <div className="text-slate-500 text-base">
      {
        readBooks.map( (book, idx) => <ShowListedBook key={idx} book={book}></ShowListedBook>)
      }
    </div>
  );
};

export default ReadBooks;