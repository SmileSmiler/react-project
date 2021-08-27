import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} /> */}

        <Route path="/dialogs"
          render={() => <Dialogs
            store={props.store}
          />} />
        <Route path="/profile"
          render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />} />
      </div>
    </div>
  );
}

export default App;
