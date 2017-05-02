class Fix < ActiveRecord::Migration[5.0]
  def up
    add_column :users, :last_name, :string
  end

  def down
    remove_column :users, :last_name
  end
end
