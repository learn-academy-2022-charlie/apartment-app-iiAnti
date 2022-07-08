import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class ApartmentShow extends Component {
  render() {
    const {apartment} = this.props
    return (
      <>
      

      <div className='show__body'>
        {apartment &&
      
          <Card className='show__card' id='show__card'>
            <CardImg src={apartment.image} alt='card image'/>
            <CardBody>
              <CardTitle tag="h2">
                House {apartment.id}
              </CardTitle>
              <br/>
                <CardSubtitle>
                  Address: {apartment.street} {apartment.city}, CA 00000
                </CardSubtitle>
                  <CardText>
                    Bedrooms:{apartment.bedrooms}
                  </CardText>
                  <CardText>
                    Bathrooms:{apartment.bathrooms}
                  </CardText>
                  <CardText>
                    Market Price:{apartment.price}
                  </CardText>
                  <CardText>
                    Manager:{apartment.manager}
                  </CardText>
                  <CardText>
                   Pets Allowed:{apartment.pets}
                  </CardText>
                
                <NavLink className='Back__index' to={`/apartmentindex`}>
                  <Button>
                  Go Back
                  </Button>
                </NavLink>
                
            </CardBody>
          </Card>
      }
      </div>
      </>
    )
  }
}
