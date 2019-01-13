import React from 'react';

import LoginFeature from 'features/login/Login';
import classes from './Login.module.scss';

const Login = () => (
  <section className={classes.loginContainer}>
    <LoginFeature />
  </section>
);

export default Login;
