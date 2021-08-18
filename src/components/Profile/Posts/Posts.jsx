import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post.jsx'

const Posts = () => {
  return (
    <div>
        My posts
      <div>
        <textarea></textarea>
        <button>add post</button>
        <button>remove</button>
      </div>
      <div className={s.posts}>
        <Post/>
      </div>
    </div>
  )
}

export default Posts