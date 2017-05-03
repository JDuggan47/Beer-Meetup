class CreateBeers < ActiveRecord::Migration[5.0]
  def change
    create_table :beers do |t|
      t.string :name_of_beer, null: false
      t.string :name_of_brewery, null: false
      t.string :style, null: false

      t.timestamps
    end
  end
end
