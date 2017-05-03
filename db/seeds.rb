# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
beers = Beer.create!([{ name_of_beer: 'Miller Lite', name_of_brewery: 'Miller Brewing Co.', style: 'light larger' },
  { name_of_beer: 'But Light', name_of_brewery: 'Budweiser', style: 'light larger' }])
