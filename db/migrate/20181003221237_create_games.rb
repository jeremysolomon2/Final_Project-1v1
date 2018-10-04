class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :user_points
      t.integer :opponent_points
      t.references :user, foreign_key: true
      t.references :court, foreign_key: true
      t.integer :score_keeper_id
      t.integer :opponent_id
      t.boolean :is_active

      t.timestamps
    end
  end
end
