import React, { Component } from 'react'
import withRoot from '../withRoot'
import TextFieldDialog from './TextFieldDialog'
import Button from 'material-ui/Button'
import { green } from '../logger'

class App extends Component {
  state = {
    open: true
  }

  handleOpen = () => {
    green('handleOpen')
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    return (
      <div>
        <Button variant='raised' color='primary' onClick={this.handleOpen}>Open</Button>
        <TextFieldDialog
          open={this.state.open}
          handleClose={this.handleClose}
        />
      </div>
    )
  }

}

export default withRoot(App)
