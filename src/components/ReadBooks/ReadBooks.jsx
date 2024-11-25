import { getStoredReadBooks } from "../../utilities/localStorage";
import ShowListedBook from "../ShowListedBook/ShowListedBook";

const ReadBooks = () => {
  
  const readBooks = getStoredReadBooks();

  if(readBooks.length == 0){
    return <h1 className="text-3xl font-semibold text-center my-44">No items were marked as Read.</h1>
  }
  
  return (
    <div className="text-slate-500 text-base mb-28">
      {
        readBooks.map( (book, idx) => <ShowListedBook key={idx} book={book}></ShowListedBook>)
      }
    </div>
  );
};

export default ReadBooks;