import React from 'react'

const Phone = ({ id, type, number }) => {
  return (
    <div>
      <input value={type} /><input value={number} />
    </div>
  )
}

export default Phone
