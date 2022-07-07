# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

apartments_arr = [
{
    street: "elm steet",
    city: "ganja",
    state: "tokyo",
    manager: "idk",
    email: "something@hisdf.com", 
    price: "alot", 
    bedrooms: 3, 
    bathrooms: 3, 
    pets: "maybe",
    image: "https://1.bp.blogspot.com/-mYxnZvpHri8/WjqqQd945hI/AAAAAAAASqU/SKg7chptEh4rwrVdwRYO_0af7KM1A6F7ACLcBGAs/s1600/haruhi201-21m54s.png"
},


{
    street: "avatar street",
    city: "air temple",
    state: "tokyo",
    manager: "Sate",
    email: "something@hello.com", 
    price: "alot", 
    bedrooms: 100, 
    bathrooms: 1, 
    pets: "yes",
    image: "https://cdna.artstation.com/p/assets/images/images/019/494/342/medium/daffa-arramy-templefinish.jpg?1563765945"
},


{
    street: "king steet",
    city: "rey",
    state: "tokyo",
    manager: "you",
    email: "something@tiny.com", 
    price: "a little bit less", 
    bedrooms: 1, 
    bathrooms: 19, 
    pets: "peasants",
    image: "https://mfiles.alphacoders.com/957/957119.jpg"
}]

apartments_arr.each do |apartment_obj|
    user.apartments.create apartment_obj
 end

 p user.apartments
 p "Apartments were made successfully"