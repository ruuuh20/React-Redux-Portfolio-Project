class ListingSerializer < ActiveModel::Serializer
  attributes :id, :main_img, :images, :neighborhood, :address, :listing_price, :listing_price_formatted, :beds, :baths, :description, :comments
end
