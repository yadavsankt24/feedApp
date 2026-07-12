import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((response) => {
                // console.log("response", response.data)
                setPosts(response.data.posts)
            })
    }, [])

  return (
    <section className="feed-section">
        {posts.length > 0 ? (
            posts.map((post) => (
                <div key={post.id} className="post-card">
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))
        ) : (
            <p>No posts yet.</p>
        )}
    </section>
  )
}

export default Feed
