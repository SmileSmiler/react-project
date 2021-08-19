import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom"

const Chek = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1" activeClassName={s.active}>name1</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2" activeClassName={s.active}>name2</NavLink>
        </div>
      </div>
      <div>
        <div className={s.messages}>
          <div className={s.message}>
            text text
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chek