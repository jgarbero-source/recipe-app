class RecipesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_valid
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def index
    render json: Recipe.all
  end
  def show
    render json: find_recipe, status: :found
  end
  def update
    recipe = find_recipe
    recipe.update!(recipe_params)
    render json: recipe, status: :ok
  end
  def create
    render json: Recipe.create!(recipe_params), status: :created
  end
  def destroy
    recipe = find_recipe
    recipe.destroy
    head :no_content, status: :ok 
  end

  private
  def recipe_params
    params.permit(:title, :ingredients, :instructions, :genre, :time, :size)
  end
  def render_not_found
    render json: {error: "Recipe not found."}, status: :not_found
  end
  def render_not_valid invalid
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
  def find_recipe
    Recipe.find(params[:id])
  end
end