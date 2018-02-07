class CreateRealtors < ActiveRecord::Migration[5.1]
  def change
    create_table :realtors do |t|
      t.string :name
      t.string :address
      t.string :phone_number
      t.string :email
    end
  end
end
