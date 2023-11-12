import { useContext } from "react";
import { BooksContext } from "../context/AllBooksContext";


const useAllBooks = () => {
  const { books } = useContext(BooksContext);
    return {books};
};

export default useAllBooks;