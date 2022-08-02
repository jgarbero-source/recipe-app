class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :bio
  has_many :recipes
end
