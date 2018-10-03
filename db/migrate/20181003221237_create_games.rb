class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :user_points
      t.integer :opponent_points
      t.references :user, foreign_key: true
      t.references :court, foreign_key: true

      t.timestamps
    end
  end
end
