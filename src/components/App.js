import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {injectGlobal, ThemeProvider} from 'styled-components';
import {
  HomePage,
  NotFoundPage,
  LoginSigninPage,
  LoginSignupPage,
  LoginRecoverPage,
  StaticPage,
  FileSummaryPage,
  FileDetailPage,
  FileSearchPage,
  UserProfilePage
} from 'components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './themes/default';
import style from './themes/style';
// import {me} from '../auth';

injectGlobal `${style}`;

const App = () => {

  window.scrollTo(0, 0);

  injectGlobal `
    body{
      background: ${theme.palette.grayscale[1]};
    }
  `;

  return (
    <MuiThemeProvider>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/login/signin" component={LoginSigninPage}/>
          <Route path="/login/signup" component={LoginSignupPage}/>
          <Route path="/login/recover" component={LoginRecoverPage}/>
          <Route path="/static/about" component={StaticPage}/>
          <Route path="/file/summary/:id" component={FileSummaryPage}/>
          <Route path="/file/detail/:id" component={FileDetailPage}/>
          <Route path="/file/search" component={FileSearchPage}/>
          <Route path="/user/profile" component={UserProfilePage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </ThemeProvider>
    </MuiThemeProvider>
  )

}

export default App;
