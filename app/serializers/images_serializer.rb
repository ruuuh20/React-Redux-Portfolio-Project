class ImagesSerializer < ActiveModel::Serializer
  attributes :id, :listing_id, :source
  belongs_to :listing
end
