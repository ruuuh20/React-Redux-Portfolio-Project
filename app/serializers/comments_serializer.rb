class CommentsSerializer < ActiveModel::Serializer
  attributes :id, :listing_id, :content, :date, :author
end
