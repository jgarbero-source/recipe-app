class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_id, :recipe_id, :rating
  belongs_to :recipe
end
