class AddLatitudeLongituteStreetCityStateToMeetups < ActiveRecord::Migration[5.0]
  def change
    add_column :meetups, :latitude, :float
    add_column :meetups, :longitude, :float
    add_column :meetups, :street, :string
    add_column :meetups, :city, :string
    add_column :meetups, :state, :string
  end
end
