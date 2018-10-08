class Court < ApplicationRecord
    has_many :games
    validates :name, :address, :city, :state, presence: true
    geocoded_by :full_address
    after_validation :geocode

    def full_address
        [address, city, state].join(', ')
    end
end
