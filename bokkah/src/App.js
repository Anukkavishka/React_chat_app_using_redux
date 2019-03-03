import React, { Component } from "react";
import "./App.css";
import store from "./Store/PrimaryStore";
import _ from "lodash";
import SideBar from "./Components/Sidebar/Sidebar";
import MainBody from "./Components/Mainbody/Mainbody";
const { contacts, user } = store.getState();
class App extends Component {
  render() {
    //console.log(store.getState().activeUserId + " this is inside the App.js ");
    return (
      <div className="App">
        <SideBar contacts={_.values(contacts.contacts)} />
        <MainBody user={user} activeUserId={store.getState().activeUserId} />
      </div>
    );
  }
}

export default App;
