import React from 'react'
import Typography from 'material-ui/Typography'

const H1 = ({ children }) => {
  return (
    <Typography variant="display2" gutterBottom="gutterBottom">
      {children}
    </Typography>
  )
}
export default H1
