class Apartment < ApplicationRecord
    belongs_to :user
    validates :street, :city, :state, :manager, :email,  presence: true
    validates :image, length: {minimum: 8}
end
 