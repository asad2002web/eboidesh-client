// import React, { useContext, useEffect, useState } from 'react'
import Loading from '../../Shared/Loading'
import Hero from './Hero'
import TopBooks from './TopBooks'
// import { BooksContext } from '../../context/AllBooksContext'
import useAllBooks from '../../hooks/useAllbooks'
import useAuth from '../../hooks/useAuth'


const Home = () => {


  const {b} = useAuth();
  console.log(b)

  const { books } = useAllBooks();

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


      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sapiente, reiciendis assumenda temporibus quis excepturi nam quos repellendus magnam enim minima alias. Voluptates cumque ducimus, architecto perspiciatis vitae excepturi quibusdam?</p>

      {
        books.length === 0 ? <Loading /> : <TopBooks books={top10Books} />
      }

    </div>
  )
}

export default Home