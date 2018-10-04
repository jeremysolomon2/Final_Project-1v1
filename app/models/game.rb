class Game < ApplicationRecord
  belongs_to :user
  belongs_to :court
  belongs_to :score_keeper, class_name: "User", optional: true
  belongs_to :opponent, class_name: "User",  optional: true

end
