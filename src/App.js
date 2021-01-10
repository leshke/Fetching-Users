import React, { useEffect } from 'react'
import './App.css';
import store from './redux/redux-state';
import { Provider, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, BrowserRouter, useLocation } from 'react-router-dom';
import { getUsers } from './redux/reducer';
import TableView from './components/Table/TableView';
import Preview from './components/Preview/Preview';
import Sorting from './components/Sorting/Sorting';
import ToggleView from './components/ToggleView'
import Preloader from './components/Preloader/Preloader';
import { useTranslation } from "react-i18next";
import { Language } from './components/Language';
import Filter from './components/Filter/Filter';

const App = React.memo(() => {
  const location = useLocation().search;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch()
  const isFetching = useSelector(state => state.usersPage.isFetching, shallowEqual)

  useEffect(() => {
    dispatch(getUsers(location))
  }, [location, dispatch])

  if (isFetching) return <Preloader />

  return <>
    <Language i18n={i18n} />
    <div className="headerWrapper">
      <Sorting t={t} />
      <ToggleView t={t} />
    </div>
    <Filter t={t} />
    <Switch>
      <Redirect exact from='/' to='/users/preview' />
      <Route path="/users/preview" component={() => <Preview t={t} />} />
      <Route path="/users/table" component={() => <TableView t={t} />} />
    </Switch>
  </>
})

const MainApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
}

export default MainApp;