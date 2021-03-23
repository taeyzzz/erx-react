import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ApplicationLayout from '../containers/ApplicationLayout/loadable'

const initializeApplicationRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home"/>} />
        <Route path="/home" component={ApplicationLayout} />
      </Switch>
    </BrowserRouter>
  )
}
export default initializeApplicationRoute
