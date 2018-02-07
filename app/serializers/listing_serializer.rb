class ListingSerializer < ActiveModel::Serializer
  attributes :id, :main_img, :images, :neighborhood, :address, :listing_price, :beds, :baths, :description, :comments
end
