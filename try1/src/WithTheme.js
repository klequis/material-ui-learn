import React from 'react'
import Button from 'material-ui/Button';
import H3 from './H3'
import Section from './Section'

const style = {
  backgroundColor: '#2f363d',
  padding: '5px'
}
const WithTheme = () => {
  return (
    <div style={style}>
      <H3>Just a button</H3>
      <Button>Button WithTheme</Button>
    </div>
  )
}
export default WithTheme
