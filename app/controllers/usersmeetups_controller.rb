class UsersController < ApplicationController

  def show
    @meetup = Meetup.find(params[:id])
    @attendees = @meetup.users
  end
  
end
