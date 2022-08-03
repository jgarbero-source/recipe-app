class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :ingredients, :instructions, :genre, :time, :size, :image, :user_id
  belongs_to :user
  has_many :reviews
end
