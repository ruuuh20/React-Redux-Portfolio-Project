class AddLogoToRealtors < ActiveRecord::Migration[5.1]
  def change
    add_column :realtors, :logo, :string
  end
end
