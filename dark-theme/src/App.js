import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const App = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant='display1' align='center'>
          Welcome to React
        </Typography>
      </header>
      <Typography align='center'>
        To get started, edit <code>src/App.js</code> and save to reload.
      </Typography>
    </div>
  );
}

export default withRoot(withStyles(styles)(App));
