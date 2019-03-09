import React from "react";
import Nintendo from "./Nintendo";
import Sega from "./Sega";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Nintendo} />
          <Route path="/sega" component={Sega} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
