class Position < ApplicationRecord
  validates :shares, :buy_price, :ticker, presence: true

  belongs_to :portfolio  
end
