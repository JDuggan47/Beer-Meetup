class BeerSerializer < ActiveModel::Serializer
  attributes :name_of_beer, :name_of_brewery, :style
  belongs_to :user
end
