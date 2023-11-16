import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {
   const [bookmarks, setBookmarks] = useState([]);
   const [readingTime, setReadingTime] = useState(0);
   
  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime);
  } 

   const handleToBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
   }

return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
          <Blogs handleMarkAsRead = {handleMarkAsRead} handleToBookmark={handleToBookmark}></Blogs>
          <Bookmarks readingTime={readingTime} bookmarks= {bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
