class CommentsController < ApplicationController
  def create
    comment = params[:comment]
    listing_id = params[:listingId]
    comment = Comment.new(comment)
    comment.listing_id = listing_id
    if comment.save
      render json: comment
    end
  end

end
