class RealtorsController < ApplicationController

  def index
    realtors = Realtor.all
    render json: realtors
  end

  def realtor_listings_query
    listings = Listing.where(realtor_id: params[:realtor_id])
    query = params[:address]
    listing = listings.where("address LIKE?", "#{query}%")
    if listing
      render json: listing
    end
  end

  def realtor_listings_index
    listings = Listing.where(realtor_id: params[:realtor_id])
    render json: listings
  end

  def show
    realtor = Realtor.find(params[:id])
    render json: realtor
  end

end
