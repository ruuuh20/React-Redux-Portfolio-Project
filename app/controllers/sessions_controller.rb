class SessionsController < ApplicationController
  def create
    realtor = Realtor.find_by(username: params[:auth][:username])
    if realtor
      # return head(:forbidden) unless realtor.authenticate(params[:session][:password])
      session[:user_id] = realtor.id
      render json: session
    end
  end

  def destroy
    unless !session[:user_id]
      session.destroy
    end
  end
end
