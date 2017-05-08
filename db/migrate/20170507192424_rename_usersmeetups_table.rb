class RenameUsersmeetupsTable < ActiveRecord::Migration[5.0]
  def change
    rename_table :usersmeetups_tables, :members
  end
end
