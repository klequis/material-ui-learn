import React from 'react'

const style = {
  backgroundColor: 'rgb(240, 240, 240)',
  padding: '3px',
  margin: '10px 3px',
}

const Section = ({ children }) => {
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Section
