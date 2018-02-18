class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    end
  end


  def comment_params
   params.require(:comment).permit(:listing_id, :author, :email, :content)
 end


end
