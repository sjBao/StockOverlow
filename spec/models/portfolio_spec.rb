require 'rails_helper'

Rspec.describe Portfolio, :type => :model do
  describe '#user should return matching user' do
    it 'returns instance of User'

    it 'returns user with matching id as #user_id'

  end

  describe '#positions' do
    it 'returns an empty collection if no positions owned'

    it 'returns a collection of positions owned by user'
  end

  describe '#total_value' do
    it 'returns an integer'

    it 'returns sum of all current value of stock'
  end

  describe '#total_cost_basis' do
    it 'return sum of cost basis for owned positions'

  end
end
