class Portfolio < ApplicationRecord
  belongs_to :user
  has_many :positions

  def total_cost_basis
    self.positions.map { |position| position.cost_basis }.reduce(:+)
  end
end
