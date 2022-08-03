class Recipe < ApplicationRecord
    has_many :reviews
    belongs_to :user
    #has_many :users, through: :reviews

    validates :size, :time, :ingredients, :instructions, :title, :user_id, presence: true
    
end
