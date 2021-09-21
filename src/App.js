import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { NotFound404 } from "./components/NotFound404/NotFound404";
import { Room } from "./components/Room/Room";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/room/:id' component={Room}/>
        <Route exact path='/' component={Main}/>
        <Route component={NotFound404}/>
      </Switch>
    </BrowserRouter>
  );
};
