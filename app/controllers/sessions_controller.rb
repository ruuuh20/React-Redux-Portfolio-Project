class SessionsController < ApplicationController
  def create
    realtor = Realtor.find_by(username: params[:session][:username])
    if realtor
      # return head(:forbidden) unless realtor.authenticate(params[:session][:password])
      session[:user_id] = realtor.id
      render json: realtor
    end
  end
end
