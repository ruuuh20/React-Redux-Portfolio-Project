class ListingsController < ApplicationController
  def featured_listings
    featured = Listing.where(featured: true)
    render json: featured
  end

  def show
    listing = Listing.find(params[:id])
    render json: listing
  end

  def index
    if params[:q]
      q = params[:q].split(" ").map{|w| w.capitalize}.join(" ")
      if q.length === 0
        render json: []
      else
        render json: Listing.where(["neighborhood = ?" , q])
      end
    else
      render json: Listing.all
    end
  end

end
