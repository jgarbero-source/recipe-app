class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :ingredients, array: true, default:[]
      t.text :instructions, array: true, default: []
      t.string :genre
      t.string :time
      t.string :size

      t.timestamps
    end
  end
end
