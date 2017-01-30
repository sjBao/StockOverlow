class CreatePositions < ActiveRecord::Migration[5.0]
  def change
    create_table :positions do |t|
      t.references :portfolio
      t.integer :shares, :null => false
      t.integer :buy_price, :null => false
      t.string :ticker, :null => false

      t.timestamps
    end
  end
end
