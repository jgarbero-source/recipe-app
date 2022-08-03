class Review < ApplicationRecord
    belongs_to :user
    belongs_to :recipe

    validates :description, presence: true, length: {minimum: 1, maximum: 500}
    validates :user_id, :recipe_id, :rating, presence: true
    validates :rating, inclusion: {in: [1,2,3,4,5]}

end
