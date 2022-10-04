import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {    // we replace this line by const Spinner = ()=>{
  // the whole code comes here
// }
  render() {                    // render() method is also deleted and we just return the actual value.
    return (
      <div className='text-center'>
        <img src={loading} alt="" />
      </div>
    )
  }
}

export default Spinner
