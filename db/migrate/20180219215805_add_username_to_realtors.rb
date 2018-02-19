class AddUsernameToRealtors < ActiveRecord::Migration[5.1]
  def change
    add_column :realtors, :username, :string
  end
end
