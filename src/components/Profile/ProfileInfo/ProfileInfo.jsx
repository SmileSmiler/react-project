import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://media.gettyimages.com/photos/the-manchester-is-my-heaven-banner-is-seen-as-fans-look-on-from-the-picture-id1186715210?s=612x612" />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;