import { createContext, useEffect, useState } from "react";

export const BooksContext = createContext();

const AllBooksContext = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    try {
      fetch("temp/AllBooks.json")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = { books };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export default AllBooksContext;
