class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :user_points
      t.integer :opponent_points
      t.references :user, foreign_key: true, index: true
      t.references :court, foreign_key: true, index: true
      t.references :score_keeper, index: true, foreign_key: {to_table: :users}
      t.references :opponent, index: true, foreign_key: {to_table: :users}
      t.boolean :is_active

      t.timestamps
    end
  end
end
