class CreateUsersmeetupsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :usersmeetups_tables do |t|
      t.belongs_to :meetup, null: false
      t.belongs_to :user, null: false
    end
  end
end
