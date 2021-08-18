import React from 'react';
import s from './Profile.module.css'
import Posts from './Posts/Posts.jsx';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://media.gettyimages.com/photos/the-manchester-is-my-heaven-banner-is-seen-as-fans-look-on-from-the-picture-id1186715210?s=612x612" />
      </div>
      <div>
        ava + description
      </div>
      <Posts />
    </div>
  )
}

export default Profile