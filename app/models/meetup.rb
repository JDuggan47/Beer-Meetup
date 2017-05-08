class Meetup < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :location, presence: true

  has_many :members
  has_many :users, through: :members
end
