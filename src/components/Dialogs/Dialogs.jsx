import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem.jsx'
import Message from './Message/Message.jsx'

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

  let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div>
        <div className={s.messages}>
          {messagesElements}
        </div>
      </div>
    </div>
  )
}

export default Dialogs