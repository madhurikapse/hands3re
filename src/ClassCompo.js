import React, { Component } from 'react'
import ClassCompo2 from './ClassCompo2'
import "./App.css"
import "./Component.css"
export default class ClassCompo extends Component {
  state={
    name:"",
    depart:"",
    rating:"",
    data:[]
  }
  handelchange=(e)=>{
    this.setState({[e.target.name]:[e.target.value]})
    this.setState({[e.target.depart]:[e.target.value]})
    this.setState({[e.target.rating]:[e.target.value]})
  }
  handelsubmit=()=>{
    const obj={
      name:this.state.name,
      depart:this.state.depart,
      rating:this.state.rating
    }
    const arr=this.state.data;
    arr.push(obj)
    this.setState({[this.state.data]:arr,clicked:false})
  }
  toggleFunction=()=>{
    this.setState({clicked:!this.state.clicked})
  }

  render() {
    return (
      <>
        {this.state.clicked ?
       <div>
       <h1>EMPLOYEE FEEDBACK FORM</h1><br></br>
       <div className='input'>
        <label>Name:</label>
        <input type='text' placeholder='enter yoyr name' name='name' onChange={this.handelchange}></input><br></br>
        <label>depart:</label>
        <input type='text' placeholder='enter yoyr department' name='name' onChange={this.handelchange}></input><br></br>
        <label>rating:</label>
        <input type='text' placeholder='enter yoyr rating' name='name' onChange={this.handelchange}></input><br></br>
        <button onClick={this.handelsubmit}>Submit</button>
       </div>
       </div>:
       <div>
       <ClassCompo2 value={this.state.data} toggleFunction={this.toggleFunction}/>
       </div>
        }
      </>
    )
  }
}
