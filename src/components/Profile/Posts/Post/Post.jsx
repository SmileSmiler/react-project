import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://assets.manutd.com/AssetPicker/images/0/0/10/126/687700/Legends-Profile_Wayne-Rooney1523460268000.jpg" />
      {props.message}
      <div>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  )
}

export default Post