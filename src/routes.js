import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from 'components/App';
import {
  NotFoundPage,
  HomePage,
  LoginPage,
  LoginSignin,
  LoginSignup,
  LoginRecover,
  StaticPage,
  StaticAbout,
  FilePage,
  FileSummaryPage,
  FileDetailPage,
  FileSearchPage
} from 'components';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/login" component={LoginPage}>
      <Route path="signin" component={LoginSignin}/>
      <Route path="signup" component={LoginSignup}/>
      <Route path="recover" component={LoginRecover}/>
    </Route>
    <Route path="/file" component={FilePage}>
      <Route path="summary/:id" component={FileSummaryPage}/>
      <Route path="detail/:id" component={FileDetailPage}/>
      <Route path="search" component={FileSearchPage}/>
    </Route>
    <Route path="/static" component={StaticPage}>
      <Route path="about" component={StaticAbout}/>
    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Route>
)

export default routes;
