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
      if params[:neighborhood]
        params[:neighborhood] = params[:neighborhood].split(" ").map{|w| w.capitalize}.join(" ")
      end
      query = {}
      params.keys.each do |key|
        if key != "controller" && key!= "action"
          query[key] = params[key]
        end
      end
      raise.params.inspect
      render json: Listing.where(query)
    end
  end

end
