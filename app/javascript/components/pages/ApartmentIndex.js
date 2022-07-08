import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg} from 'reactstrap'

export default class ApartmentIndex extends Component {
  render() {
    const {apartments} = this.props
    console.log(apartments)
    return (
      <>
      <h3 className='app__index'>Apartments</h3>
        <div>
          {apartments && apartments.map((value, index) =>{
            return (
          
              <Card className='index__card' key={index}>
                <CardImg src={value.image} alt='card image'/>
                <CardBody>
                  <CardTitle tag="h5">
                    street:{value.street}
                  </CardTitle>
                    <CardSubtitle>
                      {value.city}
                    </CardSubtitle>
                      <CardText>
                        {value.manager}
                      </CardText>
                      <CardText>
                        {value.price}
                      </CardText>
                      <CardText>
                        {value.bedrooms}
                      </CardText>
                      <CardText>
                        {value.bathrooms}
                      </CardText>
                      <CardText>
                        {value.pets}
                      </CardText>
                    <Button>
                      Click here
                    </Button>
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
