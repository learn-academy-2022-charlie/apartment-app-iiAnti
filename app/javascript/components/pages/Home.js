import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <>
      <div className='home__div'>
      <NavLink  to='/'>
          <img src='https://image.myanimelist.net/ui/99GOZ3F8HXZ2fI0ojlONSm0OVn0eyDcH10p1whUP9uWJ5IfRRa4y56yuUdQsj9kQ1mkjPU2gbQeLh4gDdud9lg_jql17tZcQllBoBFG6eRAOqFe5O3tyKYR2sYtWosM4wgx60AfEIj46hW-PrqlZaA' width='100%' alt='House logo:click to go home'
            className='header__logo'/>
        </NavLink>
        <h3 className='app__home'>The perfect App with the perfect search for the perfect <div className='you'>YOU</div></h3>
          <p>
          What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          </div>

      </>
    )
  }
}
