import SectionTitle from "../../components/Shared/SectionTitle"
import BookCard from './../../components/Shared/BookCard';

const TopBooks = ({ books }) => {
  return (
    <div className="Container">
      <SectionTitle heading={"Top Books"} subHeading={"Popular Books"} />
      <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          books.map(book => <BookCard key={book.id} book={book} />)
        }
      </ul>
    </div>
  )
}

export default TopBooks