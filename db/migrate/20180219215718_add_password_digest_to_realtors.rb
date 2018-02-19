class AddPasswordDigestToRealtors < ActiveRecord::Migration[5.1]
  def change
    add_column :realtors, :password_digest, :string
  end
end
