// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentProtectedIndex from './ApartmentProtectedIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentProtectedIndex renders", () => {
  const props = {
  apartments : [
    {
        id: 1,
        street: "elm steet",
        city: "ganja",
        state: "tokyo",
        manager: "idk",
        email: "something@hisdf.com", 
        price: "alot", 
        bedrooms: 3, 
        bathrooms: 3, 
        pets: "maybe",
        image: "https://myotakuworld.com/wp-content/uploads/2021/02/Yuukos-Shop-From-xxxHOLiC-1-1.png?ezimgfmt=ng:webp/ngcb7",
        user_id: 2
    }]
  }
  let apartmentIndexRender
  beforeEach(() => {
    apartmentIndexRender = shallow(<ApartmentProtectedIndex {...props}/>)
  })
  it("displays a heading", () => {
    const apartmentIndexHeading = apartmentIndexRender.find("[className='app__index']")
    expect(apartmentIndexHeading.length).toEqual(1)
    expect(apartmentIndexHeading.text()).toEqual("Apartments")
  })
    it("displays a card from reactstrap per apartment", () => {
      const apartmentIndexHeading = apartmentIndexRender.find("card")
      expect(apartmentIndexHeading.length).toEqual(1)
  })
})  