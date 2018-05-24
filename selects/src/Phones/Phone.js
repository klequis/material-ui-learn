import React, { Fragment } from 'react'
import PhoneNumber from './PhoneNumber'
import PhoneType from './PhoneType'

const Phone = ({ id, type, number }) => {
  return (
    <Fragment>
      <PhoneNumber
        phoneType={type}
      />
      <PhoneType
        number={number}
      />
    </Fragment>
  )
}

export default Phone
