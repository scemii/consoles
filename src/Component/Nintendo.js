import React from "react";
import ConsoleList from "./ConsoleList";
import ConsoleDetail from "./ConsoleDetail";

const Nintendo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <ConsoleList />
        </div>
        <div className="col-sm">
          <ConsoleDetail />
        </div>
      </div>
    </div>
  );
};

export default Nintendo;
