class Recipe < ApplicationRecord
    has_many :reviews
    belongs_to :user
    #has_many :users, through: :reviews

    validates :size, :time, :title, :user_id, presence: true
    
end
