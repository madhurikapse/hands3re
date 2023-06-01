import React, { Component } from 'react'
import "./App.css"
export default class ClassCompo2 extends Component {
    constructor(props){
    super(props);
    console.log(props);
    }
  render() {
    return (
        <>
      <div>
        <h1>EMPLOYE FEEDBACK DATA</h1>
        <div className='parent'>
            {this.props.value.map((item,index)=>{
                return(
                    <div className='data'>
                        <p key={index}>Name:{item.name} depart:{item.department} rating:{item.rating}</p>
                </div>
                )
            })}
        </div>
        <button onClick={this.props.toggleFunction}>GO BACK</button>
      </div>
      </>
    )
  }
}
