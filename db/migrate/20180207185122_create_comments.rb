class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :listing_id
      t.text :content
      t.string :author
      t.string :author_email
      t.timestamps
    end
  end
end
