class ListingsController < ApplicationController
  def featured_listings
    featured = Listing.where(featured: true)
    render json: featured
  end

  def show
    listing = Listing.find(params[:id])
    render json: listing
  end

  def listings
    listings = Listing.all
    render json: listings
  end

end
