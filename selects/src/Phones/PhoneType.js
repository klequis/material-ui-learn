import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

class PhoneType extends React.Component {
  state = {
    phoneType: this.props.value
  }

  _handleChange = event => {
    this.setState({ phoneType: event.target.value })
    this.props.handleChange(event)
  }


  render() {
    const { classes, type } = this.props


    return (
      <div id='f1' className={classes.root} autoComplete='off'>
        <FormControl id='PhoneType' className={classes.formControl}>
          <InputLabel htmlFor='phone-type'>{label}</InputLabel>
          <Select
            value={this.state.phoneType}
            onChange={this._handleChange}
            inputProps={{
              name: 'phone-type',
              id: 'id-phone-type'
            }}
          >
            <MenuItem value='home'>
              <em>Home</em>
            </MenuItem>
            <MenuItem value='work'>
              <em>Work</em>
            </MenuItem>
            <MenuItem value='mobile'>
              <em>Mobile</em>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}

PhoneType.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PhoneType)
