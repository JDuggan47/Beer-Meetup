class RemoveLocationColumnFromMeetupsTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :meetups, :location
  end
end
