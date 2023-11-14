import { useParams } from "react-router-dom";
import SectionTitle from "./Shared/SectionTitle"
// import { useState } from "react";
import useAllBooks from "../hooks/useAllbooks";

const SingleBook = () => {
    // route params id
    const {id} = useParams();

    // const [book, setBook] = useState(null);
    const {books} = useAllBooks();
   
    const singleBook = books.find(book => book.id == id);
    

  return (
    <div className="Container">
        <SectionTitle heading={"book name:"} subHeading={"Perfect Book"} />
        <p>This Product Details now {id} </p>
        {
            singleBook && (
                <div>
                    <h1>{singleBook.name}</h1>
                    <p>{singleBook.summary}</p>
                    <p>{singleBook.price}</p>
                    <img src={singleBook.image} alt="" />
                </div>
            )
        }
    </div>
  )
}

export default SingleBook