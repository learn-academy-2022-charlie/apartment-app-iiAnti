import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'



class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <>
      <div className='app__navbar'>
        <h1 className='app__header'>Hounty Bunter</h1>

        <NavLink className='header__search' to='/'>Home</NavLink>

      <NavLink className='header__search' to='/apartmentindex'>
        Find an Apartment 
      </NavLink>
      <NavLink className='header__search' to='/apartmentnew'>
        Add an apartment
      </NavLink>
      <NavLink className='header__search' to='/myapartments'>
              My Apartments
        </NavLink>
      

        <Nav className='header__navLink'>
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }

          
          
        </Nav>
       
        </div>
      </>
    )
  }
}
export default Header