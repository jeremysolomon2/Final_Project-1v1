class CreateCourts < ActiveRecord::Migration[5.2]
  def change
    create_table :courts do |t|
      t.string :address, null: false
      t.string :city,    null: false
      t.string :state,   null: false
      t.float :lat,      null: false
      t.float :long,     null: false
      t.string :name,    null: false

      t.timestamps
    end
  end
end
