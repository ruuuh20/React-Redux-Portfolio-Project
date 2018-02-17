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
    if params[:all]
      render json: Listing.all
    else
      query = {}
      if params[:neighborhood]
        query[:neighborhood] = params[:neighborhood].split(" ").map{|w| w.capitalize}.join(" ")
      end
      query[:beds] = params[:beds] if params[:beds]
      query[:baths] = (params[:baths].to_i..Float::INFINITY) if params[:baths]
      query[:listing_price] = (params[:minRent].to_i..(params[:maxRent]? params[:maxRent].to_i : Float::INFINITY))
      render json: Listing.where(query)
    end
  end

end
