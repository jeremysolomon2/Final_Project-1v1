class ChangeColumnDefault < ActiveRecord::Migration[5.2]
  
  def up
    change_column :courts, :latitude, :float, :null => true
    change_column :courts, :longitude, :float, :null => true
  end

  def down
    change_column :courts, :latitude, :float, :null => false
    change_column :courts, :longitude, :float, :null => false
  end
end
