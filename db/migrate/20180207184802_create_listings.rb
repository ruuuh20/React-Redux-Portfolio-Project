class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.string :main_img
      t.string :neighborhood
      t.string :address
      t.integer :listing_price
      t.integer :beds
      t.integer :baths
      t.text :description
      t.boolean :featured
    end
  end
end
