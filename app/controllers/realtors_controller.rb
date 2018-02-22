class RealtorsController < ApplicationController

  def index
    realtors = Realtor.all
    render json: realtors
  end

  def listings_index
    query = params[:address]
    listing = Listing.where("address LIKE?", "#{query}%")
    if listing
      render json: listing
    end
  end

  def show
    realtor = Realtor.find(params[:id])
    render json: realtor
  end

end
