import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg} from 'reactstrap'

export default class ApartmentProtectedIndex extends Component {
  render() {
    const {apartments} = this.props
    return (
      <>
      <h3 className='app__index'>My Apartments</h3>
      <div>
        {apartments && apartments.map((value, index) =>{
          return (
        
            <Card className='index__card' key={index}>
              <CardImg src={value.image} alt='card image'/>
              <CardBody>
                <CardTitle tag="h5">
                  {value.street}
                </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6">
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
                    <div className='button__container'>
                  <Button>
                    edit
                  </Button>
                  <Button>
                    delete
                  </Button>
                  </div>
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
