import React, { useEffect } from 'react'
import './App.css';
import store from './redux/redux-state';
import { Provider, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import { getUsers } from './redux/reducer';
import TableView from './components/Table/TableView';
import Preview from './components/Preview/Preview';
import Sorting from './components/Sorting/Sorting';
import ToggleView from './components/ToggleView'
import Preloader from './components/Preloader/Preloader';

const App = () => {
  const dispatch = useDispatch()
  const isFetching = useSelector(state => state.usersPage.isFetching, shallowEqual)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if (isFetching) return <Preloader />

  return <>
    <div className="headerWrapper">
      <Sorting />
      <ToggleView />
    </div>
    <Switch>
      <Redirect exact from='/' to='/users/preview' />
      <Route path="/users/preview" component={Preview} />
      <Route path="/users/table" component={TableView} />
    </Switch>
  </>
}

const MainApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
}

export default MainApp;