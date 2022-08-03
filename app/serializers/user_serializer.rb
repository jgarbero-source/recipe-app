class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :bio, :avatar
  has_many :recipes
  has_many :reviews
end
