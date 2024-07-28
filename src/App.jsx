import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

const App = () => (
  <div className="container">
    <Switch>
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password/:resetToken" component={ResetPassword} />
    </Switch>
  </div>
);

export default App;
