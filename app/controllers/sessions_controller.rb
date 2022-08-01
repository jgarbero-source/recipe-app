class SessionsController < ApplicationController

  # before_action :authorize, only: :destroy

  #login

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password_digest])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end


  end

  #logout

  def destroy
    session.delete :user_id
    head :no_content
  end

end
  #   def create
  #     user = User.find_by(username: params[:username])
  #     session[:user_id] = user.id
  #     render json: user
  #   end
  #   def destroy
  #     session.delete :user_id
  #     head :no_content
  #   end
  # end