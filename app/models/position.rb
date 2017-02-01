class Position < ApplicationRecord
  validates :shares, :buy_price, :ticker, presence: true

  belongs_to :portfolio

  def cost_basis
    self.shares * self.buy_price
  end
end
