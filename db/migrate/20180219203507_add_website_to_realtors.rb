class AddWebsiteToRealtors < ActiveRecord::Migration[5.1]
  def change
    add_column :realtors, :website, :string
  end
end
