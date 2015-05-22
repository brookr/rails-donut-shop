class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|
      t.string :name
      t.integer :min_cph
      t.integer :max_cph
      t.integer :avg_dpc
      t.integer :hours

      t.timestamps null: false
    end
  end
end
