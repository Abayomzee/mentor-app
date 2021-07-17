import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Index from "./components/pages/Index/Index";

function App() {
  return (
    <Suspense fallback={"Loading"}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
