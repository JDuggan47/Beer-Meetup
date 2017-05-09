class Meetup < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true


  has_many :members
  has_many :users, through: :members

  def address
    full_address = "#{self.street + self.city + self.state}"
  end

  geocoded_by :address
  after_validation :geocode, if: :address_changed?
end
