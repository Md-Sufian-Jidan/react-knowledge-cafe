import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import BookMarks from './Components/bookMarks/BookMarks'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMarks =(blog) => {
    const newBookMarks = [...bookMarks,blog];
    setBookMarks(newBookMarks);
  }
  const handleMarkAsRead = (time, id) => {
    // console.log('mark as read',time);
    const newReadingTime = (readingTime + time);
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove book mark', id)
    const remainingBookMarks = bookMarks.filter((bookMark) => bookMark.id !== id);
    setBookMarks(remainingBookMarks)
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex gap-5 max-w-7xl mx-auto'>
      <Blogs handleBookMarks={handleBookMarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </main>
    </>
  )
}

export default App
