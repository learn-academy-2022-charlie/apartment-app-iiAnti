require 'rails_helper'

RSpec.describe Apartment, type: :model do

  user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

  it 'can create an apartment' do

    user.apartments.create(
      street: "string",
      city: "string",
      state: "string",
      manager: "string",
      email: "string", 
      price: "string", 
      bedrooms: 3, 
      bathrooms: 3, 
      pets: "string",
      image: "www.urlhelper.com"
    )

    apartment = Apartment.all
    expect(apartment.length).to eq 1
  end
  it 'cant create ams aprt without valid attributes : street ' do

    apartment = user.apartments.create(
      street: nil,
      city: "string",
      state: "string",
      manager: "string",
      email: "string", 
      price: "string", 
      bedrooms: 3, 
      bathrooms: 3, 
      pets: "string",
      image: "www.urlhelper.com"
    )

    
    expect(apartment.errors[:street]).to_not be_empty
  end
  it 'cant create ams aprt without valid attributes : city ' do

    apartment = user.apartments.create(
      street: "nil",
      city: nil,
      state: "string",
      manager: "string",
      email: "string", 
      price: "string", 
      bedrooms: 3, 
      bathrooms: 3, 
      pets: "string",
      image: "www.urlhelper.com"
    )

    
    expect(apartment.errors[:city]).to_not be_empty
  end

# will finish the rest later

  it 'cant create ams aprt without valid attributes : min length ' do

    apartment = user.apartments.create(
      street: nil,
      city: "string",
      state: "string",
      manager: "string",
      email: "string", 
      price: "string", 
      bedrooms: 3, 
      bathrooms: 3, 
      pets: "string",
      image: "helpr.m"
    )

     
    expect(apartment.errors[:image]).to_not be_empty
  end
end
