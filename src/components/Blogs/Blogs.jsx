// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleToBookmark}) => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
       fetch('blogs.json')
       .then(res => res.json())
       .then(data =>setblogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map (blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleToBookmark = {handleToBookmark}>
                    </Blog>)
            }
        </div>
    );
};
Blog.propTypes = {
    handleToBookmark: PropTypes.func
}

export default Blogs;