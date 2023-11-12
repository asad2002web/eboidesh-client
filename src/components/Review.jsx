
const Review = ({review}) => {
    const {comment, user} = review;
    return (
       <div className="bg-slate-100 rounded-md mb-2 p-2">
          <div className="flex justify-between items-center">
          <p>{comment}</p>
          </div>
           <small>{user}</small>
       </div>
    )
}

export default Review