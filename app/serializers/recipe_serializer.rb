class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :ingredients, :instructions, :genre, :time, :size, :image, :user_id
  has_many :reviews
  belongs_to :user
end
