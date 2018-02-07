class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.integer :listing_id
      t.string :source
    end
  end
end
