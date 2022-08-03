class User < ApplicationRecord
    has_many :reviews
    has_many :recipes

    has_secure_password

    validates :password, length: {minimum: 6}
    validates :username, presence: true, uniqueness: true
end
