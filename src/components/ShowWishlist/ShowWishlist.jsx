import { getStoredWishlistedBooks } from "../../utilities/localStorage";
import ShowListedBook from "../ShowListedBook/ShowListedBook";

const ShowWishlist = () => {
  
  const wishList = getStoredWishlistedBooks();
  if(wishList.length == 0){
    return <h1 className="text-3xl font-semibold text-center my-40">No items were added to Wishlist.</h1>
  }
  return (
    <div className="mb-28">
      {
        wishList.map( (book, idx) => <ShowListedBook  key={idx} book={book}></ShowListedBook>)
      }
    </div>
  );
};

export default ShowWishlist;