const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hihihi', likesCount: 6 },
        { id: 2, message: 'wtf', likesCount: 10 }
      ],
      newPostText: 'new post text'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'name01' },
        { id: 2, name: 'name02' },
        { id: 3, name: 'name03' },
        { id: 4, name: 'name04' },
        { id: 5, name: 'name05' },
        { id: 6, name: 'name06' }
      ],
      messages: [
        { id: 1, message: 'text01' },
        { id: 2, message: 'text02' },
        { id: 3, message: 'text03' },
        { id: 4, message: 'text04' },
        { id: 5, message: 'text05' }
      ],
      newMassageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("state changed")
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case 'ADD-POST':
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
        break;
      case 'UPDATE-NEW-POST-TEXT':
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state)
        break;
      case 'SEND-MESSAGE':
        let newMassage = {
          id: 6, 
          message: this._state.dialogsPage.newMassageBody
        }
        this._state.dialogsPage.messages.push(newMassage)
        this._state.dialogsPage.newMassageBody = '';
        this._callSubscriber(this._state)
        break;
      case 'UPDATE-NEW-MASSAGE-BODY':
        this._state.dialogsPage.newMassageBody = action.newBody;
        this._callSubscriber(this._state)
        break;
    }
  }
}

export const addPostCreator = () => ({
  type: ADD_POST
})
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})
export const updateNewMassageBodyCreator = (body) => ({
  type: UPDATE_NEW_MASSAGE_BODY,
  newBody: body
})
export const sendMassageCreator = () => ({
  type: SEND_MESSAGE
})

export default store
window.store = store