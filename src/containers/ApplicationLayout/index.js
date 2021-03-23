import { useMemo } from 'react'
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header/loadable'
import HomePage from '../HomePage/loadable'
import BlogDetailPage from '../BlogDetailPage/loadable'
import Loading from '../../components/Loading/loadable'

import { FETCH_STATUS_REQUEST } from '../../utils'

import ApplicationLayoutStyled from './styled'

const ApplicationLayout = () => {
  const getListBlogFetchStatus = useSelector(state => state.blog.getListBlog.fetchStatus)
  const createBlogFetchStatus = useSelector(state => state.blog.createBlog.fetchStatus)

  const loading = useMemo(() => {
    let output = null
    if(getListBlogFetchStatus === FETCH_STATUS_REQUEST || createBlogFetchStatus === FETCH_STATUS_REQUEST){
      output = (
        <Loading />
      )
    }
    return output
  }, [getListBlogFetchStatus, createBlogFetchStatus])

  return (
    <ApplicationLayoutStyled>
      <Header />
      <div className="application-container">
        <Switch>
          <Route exact path="/home" component={HomePage}/>
          <Route path="/home/create" component={BlogDetailPage}/>
        </Switch>
      </div>
      {loading}
    </ApplicationLayoutStyled>
  )
}

export default ApplicationLayout
