import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
export default Routes;
