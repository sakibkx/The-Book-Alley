const getStoredReadBooks = () => {

  const storedReadBooks = localStorage.getItem("read-books");
  
  return storedReadBooks?JSON.parse(storedReadBooks) : [];
}

const saveReadBooks = id => {

  const storedReadBooks = getStoredReadBooks();
  
  const storedWishlist = getStoredWishlistedBooks();
  const newWishlist = storedWishlist.filter( bookId => bookId != id);
  localStorage.setItem('wishlist', JSON.stringify(newWishlist));

  storedReadBooks.push(id);
  localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
}

const getStoredWishlistedBooks = () => {

  const storedWishlistedBooks = localStorage.getItem("wishlist");

  return storedWishlistedBooks? JSON.parse(storedWishlistedBooks) : [] ;
}

const saveWishlistedBooks = id => {

  const storedWishlistedBooks = getStoredWishlistedBooks();
  storedWishlistedBooks.push(id);
  localStorage.setItem('wishlist', JSON.stringify(storedWishlistedBooks));
}


export {getStoredReadBooks, saveReadBooks, getStoredWishlistedBooks, saveWishlistedBooks}