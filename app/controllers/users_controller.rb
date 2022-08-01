class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_valid
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def index
    render json: User.all
  end
  def show
    #render json: find_user, status: :found
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
  def update
    user = find_user
    user.update!(user_params)
    render json: user, status: :ok
  end
  def create
    render json: User.create(user_params), status: :created
  end
  def destroy
    user = find_user
    user.destroy
    head :no_content, status: :ok 
  end

  private
  def user_params
    params.permit(:username, :password_digest, :bio)
  end
  def render_not_found
    render json: {error: "User not found."}, status: :not_found
  end
  def render_not_valid invalid
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
  def find_user
    User.find(params[:id])
  end
end
