import React from "react";
import "./Mainbody.css";
import Empty from "../Empty/Empty";
import ChatWindow from "../ChatWindow/ChatWindow";

const MainBody = ({ user, activeUserId }) => {
  // console.log(activeUserId + "  inside mainbody.js");
  const renderMainContent = () => {
    if (!activeUserId) {
      //console.log("inside MainBody where empty renders");
      return <Empty user={user} activeUserId={activeUserId} />;
    } else {
      //console.log("inside MainBody where chatwindow renders");
      return <ChatWindow activeUserId={activeUserId} />;
    }
  };
  return <div className="Main">{renderMainContent()}</div>;
};

export default MainBody;
