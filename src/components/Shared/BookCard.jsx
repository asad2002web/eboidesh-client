import ButtonPrimary from "./ButtonPrimary";
import Review from './../Review';
import { Button, Card } from "keep-react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { id, image, name, publisher, price, reviews } = book;
    // console.log(book);
    return (
        // <div className="card bg-pink-200 rounded-2xl p-4">
            
        //     <div className="card-body">
        //         <img className="w-1/2 h-68 block mx-auto " src={image[0]} alt="" />
        //         <h2 className="card-title">Book Name: {name}</h2>
        //         <p>Author:{author}</p>
        //         <p>Price: {price} BDT</p>
        //         <ul>
        //             <p>Reviews</p>
        //             {
        //             reviews.map((review, index) => <Review key={index} review={review} />)
        //         }</ul>
        //         <div className="card-actions justify-end">
        //             <ButtonPrimary>
        //                 Buy Now
        //             </ButtonPrimary>
        //         </div>
        //     </div>
        // </div>
        <Card className="md:py-3 md:px-6  p-2 max-w-[280px] mx-auto">
        <Card.Container className="flex items-center justify-center overflow-hidden">
         <img className="w-full h-[300px] transform hover:scale-110 transition-transform duration-3000 ease-in" src={image[0]} alt="" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Description>
            <p>{publisher}</p>
            <p>Price <span className="text-red-500 font-semibold text-sm sm:text-lg md:text-xl">৳{price} BDT</span></p>
          </Card.Description>
        </Card.Container>
        <Card.Container className="mt-3 flex items-center justify-center">
          <Button type="outlinePrimary" customClass="!hidden md:!block">
          <Link to={`/books/${id}`}>Details</Link>
          </Button>
        </Card.Container>
      </Card>
    )
}

export default BookCard