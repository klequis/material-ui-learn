import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import { createMuiTheme, MuiThemeProvider, withStyles } from 'material-ui/styles';
import orange from 'material-ui/colors/orange';
import H3 from './H3'

const styles = theme => ({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger,
    },
  },
  checked: {},
});

let CustomCheckbox = props => {
  console.log('props', props);
  return (
    <Checkbox
      defaultChecked
      classes={{
        root: props.classes.root,
        checked: props.classes.checked,
      }}
    />
  )
};

CustomCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

CustomCheckbox = withStyles(styles)(CustomCheckbox);

const theme = createMuiTheme({
  status: {
    // My business variables
    danger: orange[500],
  },
});

function CustomStyles() {
  return (
    <MuiThemeProvider theme={theme}>
      <H3>CustomVariables</H3>
      <CustomCheckbox />
    </MuiThemeProvider>
  );
}

export default CustomStyles;
