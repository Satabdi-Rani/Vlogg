import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {
   const [bookmarks, setBookmarks] = useState([]);

   const handleToBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
   }

return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
          <Blogs handleToBookmark={handleToBookmark}></Blogs>
          <Bookmarks bookmarks= {bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
