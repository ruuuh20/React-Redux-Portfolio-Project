class RealtorsController < ApplicationController

  def index
    realtors = Realtor.all
    render json: realtors
  end

  def show
    realtor = Realtor.find(params[:id])
    render json: realtor
  end

end
