import React from "react";
import ConsoleListSega from "./ConsoleListSega";
import ConsoleDetailSega from "./ConsoleDetailSega";

const Sega = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <ConsoleListSega />
        </div>
        <div className="column eight wide">
          <ConsoleDetailSega />
        </div>
      </div>
    </div>
  );
};

export default Sega;
