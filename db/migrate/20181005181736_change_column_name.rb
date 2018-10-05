class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :courts, :lat, :latitude
    rename_column :courts, :long, :longitude
  end
end
