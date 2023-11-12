import React, { useContext, useEffect, useState } from 'react'
import Loading from '../../Shared/Loading'
import Hero from './Hero'
import TopBooks from './TopBooks'
import { BooksContext } from '../../context/AllBooksContext'

const Home = () => {

  const { books } = useContext(BooksContext);

  // ======== Now use Context API =========
  // const [books, setBooks] = useState([])
  // console.log(top10)
  // useEffect(() => {
  //   fetch('temp/AllBooks.json')
  //     .then(res => res.json())
  //     .then(data => setBooks(data))
  // }, [])

  const top10Books = books.slice(0, 6)

  // if(books.length === 0){
  //     return<Loading/>
  // }

  return (
    <div className='Container mt-10'>
      <Hero />
      {
        books.length === 0 ? <Loading /> : <TopBooks books={top10Books} />
      }

    </div>
  )
}

export default Home