class RealtorsController < ApplicationController

  def index
    realtors = Realtor.all
    render json: realtors
  end

end
