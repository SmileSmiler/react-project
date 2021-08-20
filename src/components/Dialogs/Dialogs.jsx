import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="name01" id="1" />
        <DialogItem name="name02" id="2" />
        <DialogItem name="name03" id="3" />
        <DialogItem name="name04" id="4" />
      </div>
      <div>
        <div className={s.messages}>
          <Message message="text01"/>
          <Message message="text02"/>
          <Message message="text03"/>
        </div>
      </div>
    </div>
  )
}

export default Dialogs