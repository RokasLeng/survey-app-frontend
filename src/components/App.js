import React from 'react';
import {Route} from 'react-router-dom';

import store from '../configureStore'
import * as actionTypes from '../constants/actionTypes';

import SurveyForm from './survey-form/SurveyForm'
import SurveyBuilder from './suvey-builder/SurveyBuilder';
import SurveyResponses from './survey-responses/SurveyResponses';
import Header from './Header';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';
import SignUp from './auth/SignUp';
import RequireAuth from './auth/RequireAuth';

import '../styles/core/reset.css';
import '../styles/layouts/layout.css';
import '../styles/modules/buttons.css';
import '../styles/modules/typography.css';
import '../styles/modules/form.css';
import '../styles/modules/navigation.css';
import '../styles/modules/spinner.css';
import '../styles/pages/App.css';
import '../styles/pages/SurveyBuilder.css';
import '../styles/pages/SurveyForm.css';
import '../styles/pages/LoginForm.css';


if (localStorage.getItem('token')) {
  store.dispatch({
    type: actionTypes.AUTH_SIGN_IN_SUCCESS
  });
}

const App = () => (
  <div>
    <Header/>

    <main className="container">
      <Route path="/signin" component={SignIn}/>
      <Route path="/signout" component={SignOut}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/builder" component={RequireAuth(SurveyBuilder)}/>
      <Route path="/survey" component={RequireAuth(SurveyForm)}/>
      <Route path="/responses" component={RequireAuth(SurveyResponses)}/>

    </main>
  </div>
);

export default App;
