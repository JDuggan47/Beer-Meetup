class MeetupsController < ApplicationController

  def index
    @meetups = Meetup.all
    @meetup = Meetup.new
  end

  def show
    @meetup = Meetup.find(params[:id])
    @members = @meetup.users
  end

  def new
    @meetup = Meetup.new
  end

  def create
    @meetup = Meetup.new(meetup_params)

    if @meetup.save
      flash[:success] = 'You made an Event!'
      redirect_to meetups_path
    else
      flash[:errors] = @meetup.errors.full_messages.join(', ')
    end

  end

  def meetup_params
    params.require(:meetup).permit(:title, :description, :location, :image_url)
  end

end
