import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import BookMarks from './Components/bookMarks/BookMarks'

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleBookMarks =(blog) => {
    const newBookMarks = [...bookMarks,blog]
    setBookMarks(newBookMarks);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookMarks={handleBookMarks}></Blogs>
      <BookMarks bookMarks={bookMarks}></BookMarks>
      </main>
    </>
  )
}

export default App
