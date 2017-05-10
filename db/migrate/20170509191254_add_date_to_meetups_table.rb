class AddDateToMeetupsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :meetups, :date, :date
  end
end
