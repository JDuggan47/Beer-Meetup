class FixAddUserNameToUsersTable < ActiveRecord::Migration[5.0]
  def up
    add_column :users, :user_name, :string
  end

  def down
    remove_column :users, :user_name
  end
end
