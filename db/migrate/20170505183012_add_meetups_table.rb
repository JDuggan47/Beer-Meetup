class AddMeetupsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :meetups do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :location, null: false
      t.string :image_url

      t.timestamps null: false
    end
  end
end
