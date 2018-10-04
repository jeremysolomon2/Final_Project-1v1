class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :games
  has_many :games_where_opponent, class_name: "Game",  foreign_key: "opponent_id"
  has_many :games_where_keeper, class_name: "Game",  foreign_key: "score_keeper_id"

end
