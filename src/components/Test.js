import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Increment } from '../action'

export class test extends Component {

   onIncrement=(count)=>{
      this.props.Increment(count+1)
  }


  onDecrement=(count)=>{
    this.props.Increment(count-1)
}


  render() {
    const {count} = this.props
    console.log('hello',count);
    return (
      <div >
         <button onClick={()=>this.onDecrement(count)}>+</button>
       <p> {count} </p>
       <button onClick={()=>this.onIncrement(count)}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.doIncrement.count
  }
}

const mapDispatchToProps={
  Increment
}
export default connect(mapStateToProps,mapDispatchToProps)(test)
