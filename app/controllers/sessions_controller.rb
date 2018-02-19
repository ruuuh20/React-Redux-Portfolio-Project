class SessionsController < ApplicationController

  def create
    realtor = Realtor.find_by(username: params[:realtor][:username])
    if realtor
      return head(:forbidden) unless realtor.authenticate(params[:realtor][:password])
      session[:user_id] = realtor.id
      render body: "success"
    else
      render body: "failure"
    end
  end

end
