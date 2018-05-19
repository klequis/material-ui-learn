import React, { Component, Fragment } from 'react'
import Phones from './Phones'


class PhonesContainer extends Component {
  state = {
    phones: [
      { id: 'a', type: 'Mobile', number: '111-111-1111'},
      { id: 'b', type: 'Home', number: '222-222-2222'}
    ]
  }

  render() {
    return (
      <div>
        <Phones phones={this.state.phones} />
      </div>
    )
  }
}

export default PhonesContainer
