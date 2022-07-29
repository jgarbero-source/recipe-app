class User < ApplicationRecord
    has_many :reviews
    has_many :recipes, through: :reviews
end
