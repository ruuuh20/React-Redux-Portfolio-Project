class ListingSerializer < ActiveModel::Serializer
  attributes :id, :realtor_id, :main_img, :images, :all_image_sources, :neighborhood, :address, :listing_price, :listing_price_formatted, :beds, :baths, :description, :comments
end
