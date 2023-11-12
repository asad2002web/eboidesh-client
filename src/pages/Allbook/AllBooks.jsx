import { useContext, useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import BookCard from "../../components/Shared/BookCard";
import { BooksContext } from "../../context/AllBooksContext";
import useAllBooks from "../../hooks/useAllbooks";

const AllBooks = () => {


    //   const { books } = useContext(BooksContext);
    // using hook
    const { books } = useAllBooks();


    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     try {
    //         fetch("temp/AllBooks.json")
    //             .then((res) => res.json())
    //             .then((data) => setBooks(data));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    // console.log(books);
    if (books.length === 0) {
        return <Loading />;
    }

    return (
        <div className="Container">
            <h1>All Books</h1>
            <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    books.map((book) => <BookCard key={book.id} book={book} />)
                }
            </ul>
        </div>
    )
}

export default AllBooks