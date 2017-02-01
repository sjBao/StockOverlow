class ChangeBuyPriceToFloat < ActiveRecord::Migration[5.0]
  def change
    change_column :positions, :buy_price, :float
  end
end
