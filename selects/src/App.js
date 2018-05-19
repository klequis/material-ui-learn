import React, { Fragment } from 'react'
import Select from './Select'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Phones from './Phones'

const menuItems = [
  'April',
  'May',
  'June',
  'July'
]

const styles = {
  wrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    padding: '30px',
  }
}

const App = ({ classes }) => {

  const handleChange = e => {
    console.log(`${e.target.name}:${e.target.value}`)
  }
  return (
    <Phones />
    // <div id='wrapper' className={classes.wrapper}>
    //   <TextField
    //     label='Phone'
    //     name='phone|phoneNumber'
    //     onChange={(e) => handleChange(e, '1234')}
    //     type='text'
    //     defaultValue='222-222-2222'
    //   />
    //   <Select
    //     handleChange={handleChange}
    //     label='Month'
    //     menuItems={menuItems}
    //     controlName='month'
    //   />
    // </div>
  )
}

export default withStyles(styles)(App)
