import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class ApartmentNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {}
    }
  }

handleChange = (e) => {

    console.log(e.target.name)
    const {form} = this.state
    form[e.target.name ] = e.target.value 
    this.setState({form: e.target.value})
}

  render() {
    return (
      <h3 className='app__new'>Add Apartment</h3>
    )
  }
}
