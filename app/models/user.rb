class User < ApplicationRecord
  validates :first_name, :last_name, :email, :password, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }
  has_secure_password

  has_one :portfolio
  has_many :positions, through: :portfolio
end
