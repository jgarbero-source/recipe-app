class UsersController < ApplicationController
  # before_action :authorize, only: :index, :update, :destroy

  #signup

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: find_user, include: ['recipes', 'recipes.reviews']
  end

  #me

  def me
    render json:  @current_user
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
    user.reviews.destroy_all
    user.recipes.destroy_all
    user.destroy
    head :no_content, status: :ok 
  end

  private

  def user_params
    params.permit(:username, :password, :bio, :avatar)
  end
  def find_user
    User.find(params[:id])
  end

end


