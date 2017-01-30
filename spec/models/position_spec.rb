# pending "add some examples to (or delete) #{__FILE__}"

require 'rails_helper'

RSpec.describe Position, :type => :model do
  describe 'it belongs to a user' do
    it '#user returns user who bought this stock'
  end

  describe '#current_value' do
    it 'returns the current value of the position'
  end

  describe '#cost_basis'do
    it 'returns the buy price times the number of shares'
  end

  describe 'buy price' do
    it 'has a buy price'
  end

  describe 'shares' do
    it 'returns the amount of shares purchased'
  end

  describe '#profit_loss' do
    it 'calculates profit loss'
  end

  describe 'ticker' do
    it 'returns ticker'
  end
end
