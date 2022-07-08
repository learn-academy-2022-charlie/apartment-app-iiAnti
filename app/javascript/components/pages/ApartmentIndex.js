import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class ApartmentIndex extends Component {
  render() {
    const {apartments} = this.props
    return (
      <>
      <div className='index__app'>
      <h3 className='index__head'>Apartments</h3>
      
        {apartments && apartments.map((value, index) =>{
          return (
        
            <Card className='index__card' key={index}>
              <CardImg src={value.image} alt='card image'/>
              <CardBody>
                <CardTitle tag="h5">
                  {value.street}
                </CardTitle>
                  <CardSubtitle>
                    {value.city}
                  </CardSubtitle> 
                    <CardText>
                      {value.bedrooms}
                    </CardText>
                    <CardText>
                      {value.bathrooms}
                    </CardText>
                    
                  
                  <NavLink className='details' to={`/apartmentshow/${value.id}`}>
                    See more details
                  </NavLink>
                  
              </CardBody>
            </Card>
          
          )
        })
        }
      </div>
      
      </>
    )
  }
}
