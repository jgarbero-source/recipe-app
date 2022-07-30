class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_valid
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def index
    render json: Review.all
  end
  def show
    render json: find_review, status: :found
  end
  def update
    review = find_review
    review.update!(review_params)
    render json: review, status: :ok
  end
  def create
    render json: Review.create!(review_params), status: :created
  end
  def destroy
    review = find_review
    review.destroy
    head :no_content, status: :ok 
  end

  private
  def review_params
    params.permit(:description, :user_id, :recipe_id)
  end
  def render_not_found
    render json: {error: "Review not found."}, status: :not_found
  end
  def render_not_valid invalid
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
  def find_review
    Review.find(params[:id])
  end

end
