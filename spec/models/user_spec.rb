require 'rails_helper'

RSpec.describe User, :type => :model do
  describe 'it has has names' do
    it '#firstname returns user first name'

    it '#lastname returns user last name'

    it '#fullname should return user firstname + lastname'
  end
end
