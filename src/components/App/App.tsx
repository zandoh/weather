import React, { Fragment } from "react";
import "./styled.ts";
import { GlobalStyles } from "./styled";

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <h1>Application</h1>
    </Fragment>
  );
};

export default App;
