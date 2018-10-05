class Court < ApplicationRecord
    has_many :games
    validates :name, :address, :city, :state, presence: true
    geocoded_by :full_address
    after_validation :geocoder

    def full_address
        [address, city, state].join(', ')
    end
end
