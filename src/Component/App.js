import React from "react";
import Header from "./Header";
import HeaderImage from "./HeaderImage";
import { BrowserRouter, Route } from "react-router-dom";
import Console from './Console';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <HeaderImage />
          {/* <Route path="/nintendo" exact component={Nintendo} /> */}
          <Route path="/console/:console" exact component={Console} />
          {/* <Route path="/sega" component={console /> */}
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
