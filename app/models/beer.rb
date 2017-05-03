class Beer < ApplicationRecord
  validates :name_of_beer, presence: true
  validates :name_of_brewery, presence: true
  validates :style, presence: true

  belongs_to :user
end
