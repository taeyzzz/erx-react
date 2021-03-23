import { Switch, Route } from "react-router-dom";

import Header from '../../components/Header/loadable'
import HomePage from '../HomePage/loadable'
import BlogDetailPage from '../BlogDetailPage/loadable'

import ApplicationLayoutStyled from './styled'

const ApplicationLayout = () => {
  return (
    <ApplicationLayoutStyled>
      <Header />
      <div className="application-container">
        <Switch>
          <Route exact path="/home" component={HomePage}/>
          <Route path="/home/create" component={BlogDetailPage}/>
        </Switch>
      </div>
    </ApplicationLayoutStyled>
  )
}

export default ApplicationLayout
