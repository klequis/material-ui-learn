import react from 'react'
import { TextField } from '@material-ui/core'


const PhoneNumber = ({ value }) => {
  return (
    <TextField
      label='Phone'
      name='phone|phoneNumber'
      onChange={(e) => handleUpdate(e, _id)}
      type='text'
      value={value}
    />
  )
}
