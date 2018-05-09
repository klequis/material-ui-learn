import React, { Component } from 'react'
import Dialog, { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { green } from '../logger'

const TextFieldDialog = ({ handleClose, ...rest }) => {
  // green('arguments.length', arguments.length)
  const updateMemberEditing = (...rest) => {

    // green('arguments[0]', arguments[0])
    // green('arguments[1]', arguments[1])
    // green('arguments[3]', arguments[3])
    // green('arguments[4]', arguments[4])
    // green('a1', typeof a1)
    // green('a1', a1)
    // green('a2', typeof a2)
    // green('a3', typeof a3)
    const a = rest
    green('a', a)
  }

  return (

    <Dialog {...rest}>
      <DialogTitle id='dt-test'>TextField Example</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Type in the text field
        </DialogContentText>
        <TextField
          type='text'
          label='firstName'
          name='firstName'
          // defaultValue='I am a default value'
          // value='value'
          onChange={(e) => updateMemberEditing(e.target.name, e.target.value)}
        />


      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}


export default TextFieldDialog
