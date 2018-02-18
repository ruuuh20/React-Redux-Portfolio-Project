class CommentSerializer < ActiveModel::Serializer
  attributes :id, :listing_id, :content, :date, :author, :author_email
end
