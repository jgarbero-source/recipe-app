class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :ingredients, :instructions, :genre, :time, :size
end
