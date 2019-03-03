import React from "react";
import "./Sidebar.css";
import User from "../User/User";
//import _ from "lodash"; // used to convert object to arrays

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar style-1">
      {contacts.map(contact => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
};

export default Sidebar;
