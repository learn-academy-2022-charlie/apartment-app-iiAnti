require 'rails_helper'

RSpec.describe "Apartments", type: :request do

  user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

  describe "GET /index" do 
    it 'returns a list of apartments' do
    

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
 
      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartments.length).to eq(1)
    end
  end
  describe 'POST/create' do
   
    it 'can create an apartment' do
      
      apartment_params = {
        apartment: {
        street: '123 street',
        city: 'chicago',
        state: 'illinois',
        manager: 'joe shmoe',
        email: 'shmoe@gmail.com', 
        price: '1000',
        classification: 'studio',
        bedrooms: 1, 
        bathrooms: 1, 
        pets: 'all allowed',
        image: 'https://helloworld.com/',
        user_id: user.id
        }
      }

      post '/apartments', params: apartment_params
        expect(response.status).to eq 200

    end
  end
end