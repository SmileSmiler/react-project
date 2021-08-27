import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem.jsx'
import Message from './Message/Message.jsx'
import { sendMassageCreator, updateNewMassageBodyCreator } from '../../redux/state'

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = state.messages.map(m => <Message message={m.message} />)
  let newMassageBody = state.newMassageBody

  let onSendMessageClick = () => {
    props.store.dispatch(sendMassageCreator())
  }

  let onNewMassageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMassageBodyCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea onChange={onNewMassageChange} value={newMassageBody} placeholder='Enter new message'></textarea>
            </div>
            <div>
              <button onClick={ onSendMessageClick }>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs