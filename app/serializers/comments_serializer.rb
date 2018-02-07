class CommentsSerializer < ActiveModel::Serializer
  attributes :id, :listing_id, :content, :date, :author, :author_email
  belongs_to :listing
end
