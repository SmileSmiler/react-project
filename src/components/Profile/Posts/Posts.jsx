import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post.jsx'

const Posts = (props) => {
  
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default Posts