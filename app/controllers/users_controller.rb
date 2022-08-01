class UsersController < ApplicationController
  # before_action :authorize, only: :index, :update, :destroy

  #signup

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  #me

  def show
    render json: @current_user
  end

  #index

  def index
    render json: User.all
  end

  #update

  def update
    user = find_user
    user.update!(user_params)
    render json: user, status: :ok
  end

  #destroy

  def destroy
    user = find_user
    user.destroy
    head :no_content, status: :ok 
  end

  private

  def user_params
    params.permit(:username, :password_digest, :bio)
  end

end


