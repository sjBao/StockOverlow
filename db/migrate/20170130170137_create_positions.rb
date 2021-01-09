class CreatePositions < ActiveRecord::Migration[6.1]
  def change
    create_table :positions do |t|
      t.references :portfolio
      t.references :user

      t.integer :buy_price, :null => false
      t.integer :shares, :null => false
      t.string :ticker, :null => false

      t.timestamps
    end
  end
end
