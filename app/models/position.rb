class Position < ApplicationRecord
  validates :shares, :buy_price, :ticker, presence: true

  belong_to :user
  has_many :positions
  
end
