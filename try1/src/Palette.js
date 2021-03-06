import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import Button from 'material-ui/Button';
import H3 from './H3'

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

function Palette() {
  return (
    <MuiThemeProvider theme={theme}>
      <H3>Palette</H3>
      <div>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </div>
    </MuiThemeProvider>
  );
}

export default Palette;
