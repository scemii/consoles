import React from "react";
import ConsoleListSega from "./ConsoleListSega";
import ConsoleDetailSega from "./ConsoleDetailSega";

const Sega = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <ConsoleListSega />
        </div>
        <div className="col-sm">
          <ConsoleDetailSega />
        </div>
      </div>
    </div>
  );
};

export default Sega;
