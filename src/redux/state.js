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
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed")
  },
  addPost() {
    // debugger
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store
window.store = store