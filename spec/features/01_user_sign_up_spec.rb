require 'rails_helper'

feature 'User signs up' do
  scenario 'user signs up succesfully' do
    
    visit new_user_registration_path
      fill_in 'First name', with: 'Frank'
      fill_in 'Last name', with: 'Tank'
      fill_in 'User name', with: 'frankthetank'
      fill_in 'Email', with: 'frank@thetank.com'
      fill_in 'Password', with: 'password123'
      fill_in 'Password confirmation', with: 'password123'
      click_on 'Sign up'

  end
end
