class CreatePortfolios < ActiveRecord::Migration[6.1]
  def change
    create_table :portfolios do |t|
      t.references :user
      t.string :name, null: false

      t.timestamps
    end
  end
end
