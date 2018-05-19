import React from 'react'
import Phone from './Phone'

const Phones = ({ phones }) => {
  const renderPhones = phones.map(p => {
    return (
      <Phone
        id={p.id}
        type={p.type}
        number={p.number}
      />
    )
  })
  return (
    <div>
      {renderPhones}
    </div>
  )
}

export default Phones
