class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :description
      t.integer :user_id
      t.integer :recipe_id

      t.timestamps
    end
  end
end
